import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Leaders = () => {
  const leaders = [
    {
      name: "Анна Петрова",
      age: 17,
      position: "Координатор движения",
      city: "Южно-Сахалинск",
      achievements:
        "Организовала 5 экологических акций, лидер школьного самоуправления",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c06b8d8e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Максим Иванов",
      age: 16,
      position: "Руководитель медиа-команды",
      city: "Корсаков",
      achievements:
        "Ведёт социальные сети движения, создал образовательные видео",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "София Козлова",
      age: 17,
      position: "Ответственная за проекты",
      city: "Холмск",
      achievements: "Реализовала проект помощи пожилым людям, волонтёр года",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Артём Смирнов",
      age: 16,
      position: "Координатор образовательных программ",
      city: "Поронайск",
      achievements: "Организовал 10 образовательных семинаров, призёр олимпиад",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Елизавета Новикова",
      age: 17,
      position: "Руководитель волонтёрского направления",
      city: "Долинск",
      achievements:
        "Координирует волонтёрскую деятельность, организовала 15 акций",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Даниил Морозов",
      age: 16,
      position: "IT-координатор",
      city: "Углегорск",
      achievements:
        "Разработал мобильное приложение движения, программист-самоучка",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Наши лидеры
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Познакомьтесь с молодыми лидерами нашего движения — это ваши
              сверстники, которые уже сегодня меняют мир к лучшему
            </p>
          </div>

          <div className="mb-12">
            <Card className="p-8 bg-white">
              <div className="flex items-center justify-center mb-6">
                <Icon name="Award" className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Лидерство сверстников
              </h2>
              <p className="text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
                Мы верим, что молодёжь лучше всего понимает проблемы и
                потребности других молодых людей. Поэтому все ключевые позиции в
                нашем движении занимают ребята до 18 лет. Они прошли специальную
                подготовку, но главное — у них есть страсть к переменам и
                желание помочь.
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {leader.position}
                  </p>
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
                    <Icon name="MapPin" className="w-4 h-4 mr-1" />
                    {leader.city}
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Icon name="Calendar" className="w-4 h-4 mr-1" />
                    {leader.age} лет
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Достижения:
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {leader.achievements}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-primary text-white">
              <Icon name="Users" className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Хочешь стать лидером?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Если ты активный, целеустремлённый и хочешь изменить мир к
                лучшему — присоединяйся к нашей команде лидеров! Мы всегда ищем
                новых талантливых ребят.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Подать заявку
                </a>
                <a
                  href="#"
                  className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
                >
                  Узнать больше
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leaders;
