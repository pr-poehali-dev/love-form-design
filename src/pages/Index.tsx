import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<"wife" | "husband" | null>(null);
  const [formStep, setFormStep] = useState(1);

  const handleFormStart = (type: "wife" | "husband") => {
    setFormType(type);
    setShowAuth(true);
  };

  const handleAuthComplete = () => {
    setShowAuth(false);
    setShowForm(true);
    setFormStep(1);
  };

  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
              <path d="M20 35 C 10 30, 5 22, 5 15 C 5 8, 10 3, 15 3 C 17.5 3, 20 5, 20 8 C 20 5, 22.5 3, 25 3 C 30 3, 35 8, 35 15 C 35 22, 30 30, 20 35 Z" fill="currentColor" stroke="none"/>
            </svg>
            <span className="text-3xl font-serif font-bold text-foreground">Формула счастья</span>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#ankety" className="hover:text-primary transition-colors">Анкеты</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Цены и тарифы</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
          </ul>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-foreground tracking-tight">
          Мы помогаем людям<br />найти любовь
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto font-light">
          Персональный подход, конфиденциальность и проверенные анкеты — ваш путь к счастливым отношениям
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-5xl mx-auto mb-24">
          <Button 
            size="lg" 
            onClick={() => handleFormStart("wife")}
            className="group relative w-full md:w-96 h-40 text-3xl font-serif bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all animate-scale-in overflow-hidden border-2 border-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <svg width="48" height="48" viewBox="0 0 40 40" className="mr-4">
              <path d="M20 35 C 10 30, 5 22, 5 15 C 5 8, 10 3, 15 3 C 17.5 3, 20 5, 20 8 C 20 5, 22.5 3, 25 3 C 30 3, 35 8, 35 15 C 35 22, 30 30, 20 35 Z" fill="currentColor" stroke="none"/>
            </svg>
            <span className="relative z-10">Ищу жену</span>
          </Button>
          <Button 
            size="lg" 
            onClick={() => handleFormStart("husband")}
            className="group relative w-full md:w-96 h-40 text-3xl font-serif bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl hover:shadow-2xl transition-all animate-scale-in overflow-hidden border-2 border-secondary/20"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <svg width="48" height="48" viewBox="0 0 48 48" className="mr-4">
              <circle cx="24" cy="14" r="8" fill="currentColor"/>
              <path d="M12 38 C 12 28, 16 24, 24 24 C 32 24, 36 28, 36 38 Z" fill="currentColor"/>
            </svg>
            <span className="relative z-10">Ищу мужа</span>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 text-foreground">Наши преимущества</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-10 text-center hover:shadow-xl transition-all bg-card border border-border/50 rounded-3xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Конфиденциальность</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ваши данные под надёжной защитой. Мы гарантируем полную анонимность на всех этапах
            </p>
          </Card>

          <Card className="p-10 text-center hover:shadow-xl transition-all bg-card border border-border/50 rounded-3xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-secondary/15 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-secondary-foreground">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Персональный подход</h3>
            <p className="text-muted-foreground leading-relaxed">
              Индивидуальный подбор кандидатов с учётом ваших пожеланий и ценностей
            </p>
          </Card>

          <Card className="p-10 text-center hover:shadow-xl transition-all bg-card border border-border/50 rounded-3xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-foreground">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Проверенные анкеты</h3>
            <p className="text-muted-foreground leading-relaxed">
              Все анкеты проходят тщательную модерацию для вашей безопасности
            </p>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 my-16">
        <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-[3rem] p-16">
          <h2 className="text-5xl font-serif font-bold text-center mb-16 text-foreground">Как это работает</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mx-auto mb-8 flex items-center justify-center text-4xl font-serif font-bold shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Заполните анкету</h3>
              <p className="text-muted-foreground leading-relaxed">
                Расскажите о себе и своих предпочтениях — это займёт всего 10 минут
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground mx-auto mb-8 flex items-center justify-center text-4xl font-serif font-bold shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Выберите тариф</h3>
              <p className="text-muted-foreground leading-relaxed">
                Оплатите удобный для вас пакет услуг и получите доступ к подбору
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/80 text-accent-foreground mx-auto mb-8 flex items-center justify-center text-4xl font-serif font-bold shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Ожидайте подбор</h3>
              <p className="text-muted-foreground leading-relaxed">
                Наши специалисты найдут для вас подходящих кандидатов в течение недели
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 text-foreground">Отзывы наших клиентов</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card className="p-10 bg-card border border-border/50 rounded-3xl hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <circle cx="12" cy="8" r="5"/>
                  <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Анна, 32 года</h4>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={18} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground italic leading-relaxed text-lg">
              «Благодаря агентству я встретила своего мужа! Профессиональный подход, внимание к деталям. Рекомендую всем, кто ищет серьёзные отношения.»
            </p>
          </Card>

          <Card className="p-10 bg-card border border-border/50 rounded-3xl hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-secondary-foreground">
                  <circle cx="12" cy="8" r="5"/>
                  <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Дмитрий, 38 лет</h4>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={18} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground italic leading-relaxed text-lg">
              «Долго искал свою вторую половинку. Здесь нашёл именно то, что искал. Спасибо команде за чуткость и понимание!»
            </p>
          </Card>
        </div>
      </section>

      <footer className="bg-muted/30 mt-32 py-16 border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg width="36" height="36" viewBox="0 0 40 40" className="text-primary">
              <path d="M20 35 C 10 30, 5 22, 5 15 C 5 8, 10 3, 15 3 C 17.5 3, 20 5, 20 8 C 20 5, 22.5 3, 25 3 C 30 3, 35 8, 35 15 C 35 22, 30 30, 20 35 Z" fill="currentColor" stroke="none"/>
            </svg>
            <span className="text-2xl font-serif font-bold">Формула счастья</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Брачное агентство с персональным подходом
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </footer>

      <Dialog open={showAuth} onOpenChange={setShowAuth}>
        <DialogContent className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif text-center mb-4">
              {isLogin ? "Вход в аккаунт" : "Регистрация"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="your@email.com" className="rounded-xl h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" type="password" placeholder="••••••••" className="rounded-xl h-12" />
            </div>
            <Button onClick={handleAuthComplete} className="w-full h-12 text-lg rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground">
              {isLogin ? "Войти" : "Создать аккаунт"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              {isLogin ? "Нет аккаунта? " : "Уже есть аккаунт? "}
              <button onClick={() => setIsLogin(!isLogin)} className="text-primary hover:underline font-medium">
                {isLogin ? "Зарегистрироваться" : "Войти"}
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif text-center mb-2">
              {formType === "wife" ? "Анкета: Ищу жену" : "Анкета: Ищу мужа"}
            </DialogTitle>
            <div className="flex justify-center gap-3 mt-6 mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    formStep >= step 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && <div className={`w-12 h-1 mx-2 rounded ${formStep > step ? 'bg-primary' : 'bg-muted'}`} />}
                </div>
              ))}
            </div>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {formStep === 1 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xl font-serif font-semibold mb-4">О себе</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Имя</Label>
                    <Input placeholder="Ваше имя" className="rounded-xl h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label>Возраст</Label>
                    <Input type="number" placeholder="30" className="rounded-xl h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Город</Label>
                  <Input placeholder="Москва" className="rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                  <Label>Образование</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl h-11">
                      <SelectValue placeholder="Выберите" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="higher">Высшее</SelectItem>
                      <SelectItem value="incomplete">Неоконченное высшее</SelectItem>
                      <SelectItem value="secondary">Среднее</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>О себе</Label>
                  <Textarea placeholder="Расскажите о себе..." className="rounded-xl min-h-24" />
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xl font-serif font-semibold mb-4">О партнёре</h3>
                <div className="space-y-2">
                  <Label>Желаемый возраст</Label>
                  <div className="flex gap-3 items-center">
                    <Input type="number" placeholder="От" className="rounded-xl h-11" />
                    <span className="text-muted-foreground">—</span>
                    <Input type="number" placeholder="До" className="rounded-xl h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Город проживания</Label>
                  <Input placeholder="Москва" className="rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                  <Label>Семейное положение</Label>
                  <RadioGroup defaultValue="any">
                    <div className="flex items-center space-x-2 p-3 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                      <RadioGroupItem value="single" id="single" />
                      <Label htmlFor="single" className="cursor-pointer flex-1">Не был(а) в браке</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                      <RadioGroupItem value="divorced" id="divorced" />
                      <Label htmlFor="divorced" className="cursor-pointer flex-1">В разводе</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                      <RadioGroupItem value="any" id="any" />
                      <Label htmlFor="any" className="cursor-pointer flex-1">Не имеет значения</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Дополнительные пожелания</Label>
                  <Textarea placeholder="Что важно для вас в партнёре..." className="rounded-xl min-h-24" />
                </div>
              </div>
            )}

            {formStep === 3 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xl font-serif font-semibold mb-4">Выберите тариф</h3>
                <div className="space-y-4">
                  <Card className="p-6 border-2 border-primary/30 rounded-2xl hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-serif font-semibold">Базовый</h4>
                      <span className="text-2xl font-serif font-bold text-primary">15 000 ₽</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        До 5 анкет кандидатов
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Поддержка 1 месяц
                      </li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6 border-2 border-secondary/50 rounded-2xl hover:shadow-lg transition-all cursor-pointer bg-gradient-to-br from-secondary/5 to-transparent">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-serif font-semibold">Премиум</h4>
                        <span className="text-xs text-primary font-semibold">ПОПУЛЯРНЫЙ</span>
                      </div>
                      <span className="text-2xl font-serif font-bold text-secondary-foreground">35 000 ₽</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary-foreground" />
                        До 15 анкет кандидатов
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary-foreground" />
                        Поддержка 3 месяца
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary-foreground" />
                        Персональный менеджер
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-4 pt-4">
            {formStep > 1 && (
              <Button onClick={prevStep} variant="outline" className="flex-1 h-12 rounded-xl">
                Назад
              </Button>
            )}
            <Button 
              onClick={formStep === 3 ? () => alert("Анкета отправлена!") : nextStep}
              className="flex-1 h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {formStep === 3 ? "Отправить и оплатить" : "Далее"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
