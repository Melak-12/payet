import { useAppNavigation } from "./hooks/useAppNavigation";
import Onboarding from "./components/onboarding/Onboarding";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import PinScreen from "./components/screens/PinScreen";
import DashboardScreen from "./components/screens/HomeScreen";

function App() {
  const {
    currentScreen,
    navigateToLogin,
    navigateToRegister,
    navToVerify,
    navToDashboard,
  } = useAppNavigation();


  const screenComponents = {
    splash: <SplashScreen />,
    onboarding: (
      <Onboarding onComplete={navigateToLogin} onSkip={navigateToLogin} />
    ),
    login: (
      <LoginScreen onRegister={navigateToRegister} onVerify={navToVerify} />
    ),
    register: <RegisterScreen onVerify={navToVerify} onLogin={navigateToLogin } />,
    verify: (
      <PinScreen
        onDashboard={navToDashboard}
      />),
      dashboard: <DashboardScreen  />,
  };

  return screenComponents[currentScreen];
}

export default App;
