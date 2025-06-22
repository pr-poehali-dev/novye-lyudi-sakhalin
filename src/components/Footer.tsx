import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Users" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Новые люди</h3>
                <p className="text-sm text-gray-400">
                  Молодёжное движение Сахалин
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Создаём будущее вместе. Политическое движение для молодёжи до 18
              лет в Сахалинской области.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="MessageCircle" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Youtube" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Mail" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/leaders"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Лидеры
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" className="w-4 h-4" />
                <span>Южно-Сахалинск</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" className="w-4 h-4" />
                <span>+7 (4242) 123-456</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" className="w-4 h-4" />
                <span>info@novie-ludi-sakhalin.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Новые люди. Молодёжное движение Сахалинской области.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
