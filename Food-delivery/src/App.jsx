import { Route, Routes } from "react-router-dom";
import RiderDashboard from "./component/RiderDashboard";
import RiderDeliveryDash from "./component/RiderDeliveryDash";
import RiderNotificationPage from "./component/RiderNotificationPage";
import Home from "./Pages/Home";
import HomeTwo from "./Pages/HomeTwo";
import Companies from "./Pages/Companies";
import Restaurant from "./Pages/Restaurant";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Sellers from "./Pages/Sellers";
import Signup from "./component/Form/Signup";
import SignupAsSeller from "./component/Form/SignupAsSeller";
import SignupAsRider from "./component/Form/SignupAsRider";
import Login from "./component/Form/Login";
import ForgetPassword from "./component/Form/ForgetPassword";
import CreateNewPassword from "./component/Form/CreateNewPassword";
import PasswordReset from "./component/Form/PasswordReset";
import RateUs from "./component/FeedBack/RateUs";
import FeedbackMessage from "./component/FeedBack/FeedbackMessage";
import PaymentMethods from "./component/PaymentGateWay/PaymentMethods";
import OrderCard from "./component/PaymentGateWay/OrderCard";
import NotFound from "./component/NotFoundPage/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./component/Form/ProtectedRoute";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landingPage" element={<HomeTwo />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/buyer-dashboard"
            element={
              <ProtectedRoute allowedRoles={["buyer"]}>
                <Companies />
              </ProtectedRoute>
            }
          />

          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route
            path="/seller-dashboard"
            element={
              <ProtectedRoute allowedRoles={["seller"]}>
                <Sellers />
              </ProtectedRoute>
            }
          />

          <Route
            path="/rider-dashboard"
            element={
              <ProtectedRoute allowedRoles={["rider"]}>
                <RiderDeliveryDash />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupAsSeller" element={<SignupAsSeller />} />
          <Route path="/signupAsRider" element={<SignupAsRider />} />
          <Route path="/forgotPassword" element={<ForgetPassword />} />
          <Route path="/reset-password/:role/:token" element={<CreateNewPassword />} />
          <Route path="/resetPassword" element={<PasswordReset />} />
          <Route path="/feed" element={<RateUs />} />
          <Route path="/feeds" element={<FeedbackMessage />} />
          <Route path="/notify" element={<RiderNotificationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />

        {/* <PaymentMethods /> */}
        {/* <OrderCard /> */}
      </div>
    </>
  );
}

export default App;
