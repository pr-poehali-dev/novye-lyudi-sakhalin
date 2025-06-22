import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <img
                src="https://cdn.poehali.dev/files/153df705-ea7e-4cd8-a6e2-7e28ceaa93d2.jpg"
                alt="Новые люди"
                className="w-6 h-6 object-cover rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Новые люди</h1>
              <p className="text-xs text-gray-600">
                Молодёжное движение Сахалин
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              О нас
            </Link>
            <Link
              to="/leaders"
              className={`text-sm font-medium transition-colors ${
                isActive("/leaders")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Лидеры
            </Link>
            <Link
              to="/contacts"
              className={`text-sm font-medium transition-colors ${
                isActive("/contacts")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Контакты
            </Link>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Icon name="UserPlus" className="w-4 h-4 mr-2" />
            Присоединиться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
