import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Image as KonvaImage, Text } from "react-konva";

const FigmaKonvaEditor = () => {
  const [jsonData, setJsonData] = useState(null);
  const [imageMap, setImageMap] = useState({});
  const [images, setImages] = useState({});
  const [texts, setTexts] = useState({});
  const stageRef = useRef(null);

  // Handle JSON upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        setJsonData(data);

        // Optional: Extract imageRefs automatically
        const refs = extractImageRefs(data);
        const placeholderMap = {};
        refs.forEach((ref) => {
          // Replace with real URLs from your backend or figma API later
          placeholderMap[ref] = "https://via.placeholder.com/200x200?text=" + ref.slice(0, 6);
        });
        setImageMap(placeholderMap);
      } catch (err) {
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  // Extract image references from JSON
  const extractImageRefs = (data) => {
    const refs = new Set();
    const traverse = (node) => {
      if (node.fills && Array.isArray(node.fills)) {
        node.fills.forEach((fill) => {
          if (fill.type === "IMAGE" && fill.imageRef) refs.add(fill.imageRef);
        });
      }
      if (node.children) node.children.forEach(traverse);
    };
    traverse(data.data?.document);
    return Array.from(refs);
  };

  // Load actual images once imageMap changes
  useEffect(() => {
    const loadImages = async () => {
      const loaded = {};
      for (const [ref, url] of Object.entries(imageMap)) {
        const img = new window.Image();
        img.crossOrigin = "Anonymous";
        img.src = url;
        await new Promise((r) => (img.onload = r));
        loaded[ref] = img;
      }
      setImages(loaded);
    };
    if (Object.keys(imageMap).length > 0) loadImages();
  }, [imageMap]);

  // Recursive render function
  const renderNode = (node) => {
    if (node.type === "RECTANGLE" && node.fills?.[0]?.type === "IMAGE") {
      const ref = node.fills[0].imageRef;
      const img = images[ref];
      const { x, y, width, height } = node.absoluteBoundingBox;
      if (img)
        return (
          <KonvaImage
            key={node.id}
            x={x}
            y={y}
            width={width}
            height={height}
            image={img}
            listening={false}
          />
        );
    }

    if (node.type === "TEXT") {
      const { x, y, width, height } = node.absoluteBoundingBox;
      const color = node.fills?.[0]?.color || { r: 0, g: 0, b: 0, a: 1 };
      const textColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
        color.b * 255
      }, ${color.a})`;

      return (
        <Text
          key={node.id}
          x={x}
          y={y}
          width={width}
          height={height}
          text={texts[node.id] ?? node.characters}
          fontSize={node.style?.fontSize || 24}
          fontFamily={node.style?.fontFamily || "Arial"}
          fill={textColor}
          align={node.style?.textAlignHorizontal?.toLowerCase() || "left"}
          onClick={() => handleTextClick(node.id, node.characters)}
          draggable
        />
      );
    }

    if (node.children) return node.children.map(renderNode);
    return null;
  };

  // Text editing logic
  const handleTextClick = (id, text) => {
    const stage = stageRef.current.getStage();
    const absPos = stage.getPointerPosition();
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "absolute";
    textarea.style.top = absPos.y + "px";
    textarea.style.left = absPos.x + "px";
    textarea.style.fontSize = "18px";
    textarea.style.border = "1px solid #aaa";
    textarea.style.background = "#fff";
    textarea.style.zIndex = 9999;
    document.body.appendChild(textarea);
    textarea.focus();

    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        setTexts((prev) => ({ ...prev, [id]: textarea.value }));
        document.body.removeChild(textarea);
      }
    });

    textarea.addEventListener("blur", () => {
      setTexts((prev) => ({ ...prev, [id]: textarea.value }));
      document.body.removeChild(textarea);
    });
  };

  if (!jsonData)
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h3>Upload your Figma JSON to preview and edit</h3>
        <input type="file" accept=".json" onChange={handleFileUpload} />
      </div>
    );

  const root = jsonData.data.document.children[0].children[0];

  return (
    <div style={{ padding: 20 }}>
      <h3>JSON Preview & Editor</h3>
      <input type="file" accept=".json" onChange={handleFileUpload} />
      <Stage
        ref={stageRef}
        width={1080}
        height={1350}
        style={{ border: "1px solid #ddd", background: "#f9f9f9", marginTop: 10 }}
      >
        <Layer>{renderNode(root)}</Layer>
      </Stage>
    </div>
  );
};

export default FigmaKonvaEditor;
