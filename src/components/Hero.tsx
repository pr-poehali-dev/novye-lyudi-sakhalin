import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Молодёжь — это будущее
              <span className="text-primary"> Сахалина</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Движение "Новые люди" для молодёжи до 18 лет. Создаём будущее
              вместе, развиваем лидерские качества и меняем мир к лучшему.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="UserPlus" className="w-5 h-5 mr-2" />
                Присоединиться к движению
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  <Icon name="Info" className="w-5 h-5 mr-2" />
                  Узнать больше
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <Icon
                name="Users"
                className="w-8 h-8 text-primary mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 mb-2">500+</h3>
              <p className="text-sm text-gray-600">Активных участников</p>
            </Card>
            <Card className="p-6 text-center">
              <Icon
                name="MapPin"
                className="w-8 h-8 text-primary mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 mb-2">15</h3>
              <p className="text-sm text-gray-600">Городов области</p>
            </Card>
            <Card className="p-6 text-center">
              <Icon
                name="Trophy"
                className="w-8 h-8 text-primary mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 mb-2">50+</h3>
              <p className="text-sm text-gray-600">Реализованных проектов</p>
            </Card>
            <Card className="p-6 text-center">
              <Icon
                name="Calendar"
                className="w-8 h-8 text-primary mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 mb-2">3</h3>
              <p className="text-sm text-gray-600">Года развития</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
