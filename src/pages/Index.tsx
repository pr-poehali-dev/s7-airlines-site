import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Pilot {
  rank: number;
  name: string;
  flights: number;
  hours: number;
  rating: number;
  status: 'online' | 'offline';
}

const mockPilots: Pilot[] = [
  { rank: 1, name: 'SkyMaster_Pro', flights: 1247, hours: 3892, rating: 98.5, status: 'online' },
  { rank: 2, name: 'AviationKing', flights: 1156, hours: 3654, rating: 97.8, status: 'online' },
  { rank: 3, name: 'CloudRunner', flights: 1089, hours: 3421, rating: 97.2, status: 'offline' },
  { rank: 4, name: 'JetStream777', flights: 982, hours: 3102, rating: 96.5, status: 'online' },
  { rank: 5, name: 'WingCommander', flights: 945, hours: 2987, rating: 96.1, status: 'offline' },
  { rank: 6, name: 'FlightPro2024', flights: 876, hours: 2754, rating: 95.8, status: 'online' },
  { rank: 7, name: 'SkyCaptain', flights: 834, hours: 2621, rating: 95.2, status: 'online' },
  { rank: 8, name: 'AirAce', flights: 789, hours: 2489, rating: 94.9, status: 'offline' },
];

const fleet = [
  { model: 'Boeing 737-800', count: 12, seats: 189, range: '5436 км' },
  { model: 'Airbus A320neo', count: 8, seats: 180, range: '6300 км' },
  { model: 'Boeing 777-300ER', count: 4, seats: 402, range: '13650 км' },
  { model: 'Airbus A321neo', count: 6, seats: 220, range: '7400 км' },
];

const routes = [
  { from: 'Москва (SVO)', to: 'Санкт-Петербург (LED)', duration: '1ч 30м', frequency: 'Ежедневно' },
  { from: 'Москва (DME)', to: 'Новосибирск (OVB)', duration: '4ч 15м', frequency: '3 раза в день' },
  { from: 'Санкт-Петербург (LED)', to: 'Сочи (AER)', duration: '3ч 10м', frequency: 'Ежедневно' },
  { from: 'Екатеринбург (SVX)', to: 'Владивосток (VVO)', duration: '6ч 45м', frequency: '2 раза в день' },
];

const news = [
  { title: 'Новый маршрут Москва - Токио', date: '12 ноября 2025', category: 'Маршруты' },
  { title: 'Пополнение флота: 5 новых A320neo', date: '8 ноября 2025', category: 'Флот' },
  { title: 'Турнир пилотов: Зимний кубок 2025', date: '5 ноября 2025', category: 'События' },
  { title: 'Обновление системы рейтингов', date: '1 ноября 2025', category: 'Обновления' },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-2xl font-bold text-white">S7 Airlines</h1>
                <p className="text-xs text-white/70">PTFS Virtual</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'fleet', 'routes', 'vacancies', 'news', 'leaderboard'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-white/90 hover:text-primary transition-colors font-medium ${
                    activeSection === section ? 'text-primary' : ''
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'fleet' && 'Флот'}
                  {section === 'routes' && 'Маршруты'}
                  {section === 'vacancies' && 'Вакансии'}
                  {section === 'news' && 'Новости'}
                  {section === 'leaderboard' && 'Рейтинг'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="pt-24 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.7)), url('https://cdn.poehali.dev/projects/34d7bc43-7e28-4d65-9611-25db16de7adb/files/628cba28-d433-46cb-b04d-1451f0e5a539.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <Badge className="mb-4 bg-primary text-white text-sm px-4 py-1">
              Виртуальная авиакомпания PTFS
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Взлетай с <span className="text-primary">S7 Airlines</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Присоединяйся к крупнейшей виртуальной авиакомпании в Roblox. Летай на реалистичных маршрутах, зарабатывай рейтинг и становись лучшим пилотом!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать полёты
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                <Icon name="Users" className="mr-2" size={20} />
                Присоединиться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="leaderboard" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Рейтинг пилотов</h2>
            <p className="text-muted-foreground text-lg">Лучшие пилоты S7 Airlines</p>
          </div>
          <Card className="max-w-5xl mx-auto shadow-xl border-primary/10 animate-scale-in">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle className="flex items-center gap-2">
                <Icon name="Trophy" className="text-primary" size={28} />
                Таблица лидеров
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Место</th>
                      <th className="px-6 py-4 text-left font-semibold">Пилот</th>
                      <th className="px-6 py-4 text-center font-semibold">Полёты</th>
                      <th className="px-6 py-4 text-center font-semibold">Часы налёта</th>
                      <th className="px-6 py-4 text-center font-semibold">Рейтинг</th>
                      <th className="px-6 py-4 text-center font-semibold">Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPilots.map((pilot, index) => (
                      <tr
                        key={pilot.rank}
                        className={`border-b transition-colors hover:bg-muted/30 ${
                          index < 3 ? 'bg-primary/5' : ''
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {pilot.rank === 1 && <Icon name="Crown" className="text-yellow-500" size={20} />}
                            {pilot.rank === 2 && <Icon name="Award" className="text-gray-400" size={20} />}
                            {pilot.rank === 3 && <Icon name="Medal" className="text-orange-600" size={20} />}
                            <span className="font-bold text-lg">{pilot.rank}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold">{pilot.name}</td>
                        <td className="px-6 py-4 text-center">{pilot.flights.toLocaleString()}</td>
                        <td className="px-6 py-4 text-center">{pilot.hours.toLocaleString()}ч</td>
                        <td className="px-6 py-4 text-center">
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {pilot.rating}%
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                pilot.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                              }`}
                            />
                            <span className="text-sm">
                              {pilot.status === 'online' ? 'В сети' : 'Не в сети'}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="fleet" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш флот</h2>
            <p className="text-muted-foreground text-lg">Современные воздушные суда для комфортных полётов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {fleet.map((aircraft, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 border-primary/10 animate-scale-in">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Plane" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{aircraft.model}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Количество:</span>
                      <span className="font-semibold">{aircraft.count} шт</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Мест:</span>
                      <span className="font-semibold">{aircraft.seats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Дальность:</span>
                      <span className="font-semibold">{aircraft.range}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Маршруты</h2>
            <p className="text-muted-foreground text-lg">Популярные направления S7 Airlines</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-all border-l-4 border-l-primary animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="font-bold text-lg mb-1">{route.from}</div>
                      <div className="text-sm text-muted-foreground">{route.frequency}</div>
                    </div>
                    <Icon name="ArrowRight" className="text-primary mx-4" size={24} />
                    <div className="flex-1 text-right">
                      <div className="font-bold text-lg mb-1">{route.to}</div>
                      <div className="text-sm text-muted-foreground">{route.duration}</div>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                    <Icon name="PlaneTakeoff" className="mr-2" size={16} />
                    Выбрать рейс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Вакансии</h2>
            <p className="text-muted-foreground text-lg">Присоединяйся к команде S7 Airlines</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20 hover:border-primary/50 transition-all animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="UserCheck" className="text-primary" size={24} />
                  Пилот
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Требования:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5" size={16} />
                    <span>Минимум 50 часов налёта</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5" size={16} />
                    <span>Знание правил Project Flight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5" size={16} />
                    <span>Рейтинг не менее 85%</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-4">
                  Подать заявку
                </Button>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/50 transition-all animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Settings" className="text-accent" size={24} />
                  Диспетчер
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Требования:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-0.5" size={16} />
                    <span>Опыт координации полётов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-0.5" size={16} />
                    <span>Коммуникабельность</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-0.5" size={16} />
                    <span>Онлайн 10+ часов в неделю</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90 mt-4">
                  Подать заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Новости</h2>
            <p className="text-muted-foreground text-lg">Последние обновления и события</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:translate-x-1 border-l-4 border-l-accent animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                    <Icon name="ChevronRight" className="text-muted-foreground" size={20} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <h3 className="font-bold text-lg">S7 Airlines</h3>
                  <p className="text-xs text-white/70">PTFS</p>
                </div>
              </div>
              <p className="text-sm text-white/70">Виртуальная авиакомпания №1 в Roblox</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="hover:text-primary cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Флот</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Полёты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="hover:text-primary cursor-pointer transition-colors">Маршруты</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Расписание</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Рейтинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Discord</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Правила</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>© 2025 S7 Airlines Virtual. PTFS (Pilot Training Flight Simulator), Roblox</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;