import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: "Users",
      title: "Лидерство сверстников",
      description:
        "Наши лидеры — такие же молодые люди, как и ты. Мы верим, что лучше всего понимать проблемы молодёжи могут только сами молодые люди.",
      link: "/leaders",
    },
    {
      icon: "Target",
      title: "Реальные проекты",
      description:
        "Участвуй в проектах, которые действительно меняют жизнь в твоём городе. От экологических инициатив до образовательных программ.",
      link: "/about",
    },
    {
      icon: "MessageCircle",
      title: "Твой голос важен",
      description:
        "Каждое мнение учитывается. Мы создаём платформу, где молодёжь может высказать свои идеи и быть услышанной.",
      link: "/contacts",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Почему именно мы?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — единственное в Сахалинской области политическое движение,
            которое полностью фокусируется на молодёжи до 18 лет
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon
                  name={feature.icon as any}
                  className="w-6 h-6 text-primary"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to={feature.link}>
                  Подробнее
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
