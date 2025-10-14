import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Heart" size={32} className="text-primary" />
          <span className="text-2xl font-serif font-bold text-foreground">Формула счастья</span>
        </div>
        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="#" className="hover:text-primary transition-colors">Анкеты</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Цены</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
        </ul>
      </nav>

      <section className="container mx-auto px-4 py-16 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
          Мы помогаем людям найти любовь
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Персональный подход, конфиденциальность и проверенные анкеты — ваш путь к счастливым отношениям
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto mb-20">
          <Button 
            size="lg" 
            className="w-full md:w-80 h-32 text-2xl font-serif bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all animate-scale-in"
          >
            <Icon name="User" size={32} className="mr-3" />
            Ищу жену
          </Button>
          <Button 
            size="lg" 
            className="w-full md:w-80 h-32 text-2xl font-serif bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all animate-scale-in"
            style={{ animationDelay: '0.1s' }}
          >
            <Icon name="UserRound" size={32} className="mr-3" />
            Ищу мужа
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">Наши преимущества</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-card border-border">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Lock" size={32} className="text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Конфиденциальность</h3>
            <p className="text-muted-foreground">
              Ваши данные под надёжной защитой. Мы гарантируем полную анонимность на всех этапах
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-card border-border">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <Icon name="UserCheck" size={32} className="text-secondary-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Персональный подход</h3>
            <p className="text-muted-foreground">
              Индивидуальный подбор кандидатов с учётом ваших пожеланий и ценностей
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-card border-border">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center">
                <Icon name="ShieldCheck" size={32} className="text-accent-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Проверенные анкеты</h3>
            <p className="text-muted-foreground">
              Все анкеты проходят тщательную модерацию для вашей безопасности
            </p>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-muted/50 rounded-3xl my-16">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">Как это работает</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground mx-auto mb-6 flex items-center justify-center text-3xl font-serif font-bold">
              1
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Заполните анкету</h3>
            <p className="text-muted-foreground">
              Расскажите о себе и своих предпочтениях — это займёт всего 10 минут
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-secondary text-secondary-foreground mx-auto mb-6 flex items-center justify-center text-3xl font-serif font-bold">
              2
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Выберите тариф</h3>
            <p className="text-muted-foreground">
              Оплатите удобный для вас пакет услуг и получите доступ к подбору
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-accent text-accent-foreground mx-auto mb-6 flex items-center justify-center text-3xl font-serif font-bold">
              3
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Ожидайте подбор</h3>
            <p className="text-muted-foreground">
              Наши специалисты найдут для вас подходящих кандидатов в течение недели
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">Отзывы наших клиентов</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="User" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Анна, 32 года</h4>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "Благодаря агентству я встретила своего мужа! Профессиональный подход, внимание к деталям. Рекомендую всем, кто ищет серьёзные отношения."
            </p>
          </Card>

          <Card className="p-8 bg-card border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Icon name="UserRound" size={24} className="text-secondary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold">Дмитрий, 38 лет</h4>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "Долго искал свою вторую половинку. Здесь нашёл именно то, что искал. Спасибо команде за чуткость и понимание!"
            </p>
          </Card>
        </div>
      </section>

      <footer className="bg-muted/30 mt-20 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" size={28} className="text-primary" />
            <span className="text-xl font-serif font-bold">Формула счастья</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Брачное агентство с персональным подходом
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
