import { IxButton } from '@siemens/ix-react';

function Login() {
  const handleClick = () => {
    const callbackUrl = `${window.location.origin}/auth/callback`;
    const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const targetUrl = `https://accounts.google.com/o/oauth2/auth?redirect_uri=${encodeURIComponent(
      callbackUrl,
    )}&response_type=token&client_id=${googleClientId}&scope=openid%20email%20profile`;
    window.location.href = targetUrl;
  };

  return (
    <div className="flex justify-center items-center text-center min-h-screen">
      <IxButton icon="log-in" onClick={handleClick}>
        Login
      </IxButton>
    </div>
  );
}

export default Login;
