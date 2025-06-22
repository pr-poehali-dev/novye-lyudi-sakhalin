import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              О нашем движении
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы — молодёжное крыло партии "Новые люди" в Сахалинской области.
              Создано специально для молодых людей до 18 лет.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Наша миссия
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Мы верим, что молодёжь — это не просто будущее, а настоящее
                нашей страны. Каждый молодой человек имеет право быть услышанным
                и участвовать в принятии решений, которые касаются его жизни.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Наша цель — создать пространство, где молодые люди могут
                развивать лидерские качества, реализовывать социальные проекты и
                влиять на политику в своём регионе.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&h=400&fit=crop"
                alt="Молодёжное движение"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center">
              <Icon
                name="Heart"
                className="w-8 h-8 text-primary mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2">
                Забота о будущем
              </h3>
              <p className="text-gray-600">
                Мы думаем о том, какой мир оставим следующим поколениям
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Icon
                name="Lightbulb"
                className="w-8 h-8 text-primary mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Инновации</h3>
              <p className="text-gray-600">
                Используем современные технологии для решения проблем
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Icon
                name="Users"
                className="w-8 h-8 text-primary mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Единство</h3>
              <p className="text-gray-600">
                Объединяем молодёжь для достижения общих целей
              </p>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Что мы делаем?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Образовательные программы
                </h3>
                <p className="text-gray-600 mb-4">
                  Проводим семинары, тренинги и мастер-классы по развитию
                  лидерских качеств, основам политологии и гражданского
                  общества.
                </p>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Социальные проекты
                </h3>
                <p className="text-gray-600">
                  Реализуем инициативы по улучшению жизни в наших городах:
                  экологические акции, благотворительность, волонтёрство.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Политическое участие
                </h3>
                <p className="text-gray-600 mb-4">
                  Учим молодёжь участвовать в политической жизни региона,
                  выражать своё мнение и отстаивать интересы молодого поколения.
                </p>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Сетевое взаимодействие
                </h3>
                <p className="text-gray-600">
                  Создаём связи между молодыми активистами из разных городов
                  области, обмениваемся опытом и лучшими практиками.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
