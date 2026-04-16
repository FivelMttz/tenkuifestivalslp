import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff } from "lucide-react";

const HASH = "7800abf6d2c7df824de7094bab72c4d94239e099d655ed5a986bdbf27dcb002c";

async function sha256(message: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hash = await sha256(password);
    if (hash === HASH) {
      sessionStorage.setItem("tenkui_admin", "1");
      navigate("/admin/panel");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="bg-cream rounded-3xl p-8 shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-terracotta/20 flex items-center justify-center">
              <Lock className="w-7 h-7 text-terracotta" />
            </div>
          </div>
          <h1 className="font-serif text-2xl font-bold text-warm-brown text-center mb-2">
            Panel Admin
          </h1>
          <p className="text-sm text-warm-brown/60 text-center mb-6">
            Tënkui 2026
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className={`w-full bg-cream-light border-2 ${error ? "border-destructive" : "border-warm-brown/20"} rounded-xl px-4 py-3 pr-10 text-warm-brown placeholder:text-warm-brown/40 focus:outline-none focus:border-terracotta transition-colors`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-brown/40 hover:text-warm-brown"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && (
              <p className="text-xs text-destructive text-center">Contraseña incorrecta</p>
            )}
            <button
              type="submit"
              className="w-full bg-terracotta text-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Acceder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
