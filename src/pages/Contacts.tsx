import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Главный офис",
      details: "г. Южно-Сахалинск, ул. Ленина, 123",
      extra: "Ежедневно с 10:00 до 18:00",
    },
    {
      icon: "Phone",
      title: "Телефон",
      details: "+7 (4242) 123-456",
      extra: "Звонки принимаем с 9:00 до 20:00",
    },
    {
      icon: "Mail",
      title: "Электронная почта",
      details: "info@novie-ludi-sakhalin.ru",
      extra: "Отвечаем в течение 24 часов",
    },
  ];

  const socialLinks = [
    {
      icon: "Instagram",
      name: "Instagram",
      url: "#",
      handle: "@novieludi_sakhalin",
    },
    {
      icon: "MessageCircle",
      name: "Telegram",
      url: "#",
      handle: "@novieludi_sakhalin",
    },
    {
      icon: "Youtube",
      name: "YouTube",
      url: "#",
      handle: "Новые люди Сахалин",
    },
    {
      icon: "Mail",
      name: "ВКонтакте",
      url: "#",
      handle: "vk.com/novieludi_sakhalin",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Свяжись с нами
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Есть вопросы? Хочешь присоединиться к движению? Напиши нам любым
              удобным способом!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Наши контакты
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={contact.icon as any}
                          className="w-6 h-6 text-primary"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-gray-600 mb-1">{contact.details}</p>
                        <p className="text-sm text-gray-500">{contact.extra}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Мы в социальных сетях
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <Icon
                        name={social.icon as any}
                        className="w-5 h-5 text-primary"
                      />
                      <div>
                        <p className="font-medium text-gray-900">
                          {social.name}
                        </p>
                        <p className="text-sm text-gray-600">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Напиши нам
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя
                      </label>
                      <Input placeholder="Твоё имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Возраст
                      </label>
                      <Input placeholder="Сколько тебе лет?" type="number" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Город
                    </label>
                    <Input placeholder="Твой город" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Контакты
                    </label>
                    <Input placeholder="Телефон, email или соцсети" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Расскажи о себе
                    </label>
                    <Textarea
                      placeholder="Чем увлекаешься? Какие у тебя интересы? Почему хочешь присоединиться к движению?"
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </Card>

              <Card className="p-6 mt-6 bg-green-50">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-green-900 mb-1">
                      Как присоединиться?
                    </h3>
                    <p className="text-sm text-green-700">
                      Заполни форму выше или напиши нам в любой социальной сети.
                      Мы свяжемся с тобой и пригласим на ближайшую встречу!
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
