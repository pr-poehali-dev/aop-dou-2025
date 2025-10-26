import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('program');

  const lessonCategories = [
    {
      id: 'cognitive',
      title: 'Познавательное развитие',
      color: 'bg-purple-100 text-purple-700',
      icon: 'Brain',
      lessons: [
        {
          title: 'Формирование представлений о форме',
          age: '4-5 лет',
          duration: '20 мин',
          image: 'https://cdn.poehali.dev/projects/fb6c40e4-2b74-43d3-8efa-4f41438ad59c/files/bf5a6a68-6662-463f-a987-6fb15e639827.jpg',
          description: 'Знакомство с геометрическими фигурами через тактильные ощущения',
          materials: ['Деревянные фигуры', 'Сортеры', 'Цветные карточки']
        },
        {
          title: 'Развитие внимания и памяти',
          age: '5-6 лет',
          duration: '25 мин',
          image: 'https://cdn.poehali.dev/projects/fb6c40e4-2b74-43d3-8efa-4f41438ad59c/files/8e681b83-1668-42b9-924e-87e27576df84.jpg',
          description: 'Игры на концентрацию внимания и запоминание последовательностей',
          materials: ['Мемо-карточки', 'Пазлы', 'Музыкальные инструменты']
        }
      ]
    },
    {
      id: 'speech',
      title: 'Речевое развитие',
      color: 'bg-green-100 text-green-700',
      icon: 'MessageCircle',
      lessons: [
        {
          title: 'Артикуляционная гимнастика',
          age: '4-5 лет',
          duration: '15 мин',
          image: 'https://cdn.poehali.dev/projects/fb6c40e4-2b74-43d3-8efa-4f41438ad59c/files/8e681b83-1668-42b9-924e-87e27576df84.jpg',
          description: 'Упражнения для развития речевого аппарата',
          materials: ['Зеркало', 'Иллюстрации', 'Логопедические карточки']
        },
        {
          title: 'Обогащение словарного запаса',
          age: '5-7 лет',
          duration: '20 мин',
          image: 'https://cdn.poehali.dev/projects/fb6c40e4-2b74-43d3-8efa-4f41438ad59c/files/bf5a6a68-6662-463f-a987-6fb15e639827.jpg',
          description: 'Изучение новых слов через игровые ситуации',
          materials: ['Предметные картинки', 'Игрушки', 'Книги с иллюстрациями']
        }
      ]
    },
    {
      id: 'social',
      title: 'Социально-коммуникативное развитие',
      color: 'bg-yellow-100 text-yellow-700',
      icon: 'Users',
      lessons: [
        {
          title: 'Эмоции и чувства',
          age: '4-6 лет',
          duration: '20 мин',
          image: 'https://cdn.poehali.dev/projects/fb6c40e4-2b74-43d3-8efa-4f41438ad59c/files/c7c2a7b9-0192-4b71-a791-58da14304017.jpg',
          description: 'Распознавание и выражение базовых эмоций',
          materials: ['Карточки с эмоциями', 'Зеркало', 'Игрушки-марионетки']
        }
      ]
    }
  ];

  const documents = [
    {
      category: 'Нормативные документы',
      items: [
        { title: 'АОП для детей с ЗПР 2025', type: 'PDF', size: '2.3 МБ' },
        { title: 'ФГОС ДО', type: 'PDF', size: '1.8 МБ' },
        { title: 'Программа коррекционной работы', type: 'DOCX', size: '856 КБ' }
      ]
    },
    {
      category: 'Методические рекомендации',
      items: [
        { title: 'Рекомендации по работе с детьми с ЗПР', type: 'PDF', size: '1.2 МБ' },
        { title: 'План индивидуального сопровождения', type: 'DOCX', size: '234 КБ' }
      ]
    }
  ];

  const galleryImages = [
    {
      title: 'Творческие работы группы "Солнышко"',
      date: 'Октябрь 2025',
      image: 'https://cdn.poehali.dev/projects/fb6c40e4-2b74-43d3-8efa-4f41438ad59c/files/c7c2a7b9-0192-4b71-a791-58da14304017.jpg',
      description: 'Коллективная аппликация "Осенний лес"'
    },
    {
      title: 'Занятие по лепке',
      date: 'Сентябрь 2025',
      image: 'https://cdn.poehali.dev/projects/fb6c40e4-2b74-43d3-8efa-4f41438ad59c/files/8e681b83-1668-42b9-924e-87e27576df84.jpg',
      description: 'Развитие мелкой моторики через пластилинографию'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">АОП для детей с ЗПР</h1>
              <p className="text-sm text-gray-600">Адаптированная образовательная программа</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-white/50 p-2 rounded-2xl">
            <TabsTrigger 
              value="program" 
              className="flex items-center gap-2 data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-xl py-3"
            >
              <Icon name="BookOpen" size={18} />
              <span className="hidden sm:inline">Программа обучения</span>
              <span className="sm:hidden">Программа</span>
            </TabsTrigger>
            <TabsTrigger 
              value="documents" 
              className="flex items-center gap-2 data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-xl py-3"
            >
              <Icon name="FileText" size={18} />
              <span className="hidden sm:inline">Документы</span>
              <span className="sm:hidden">Docs</span>
            </TabsTrigger>
            <TabsTrigger 
              value="gallery" 
              className="flex items-center gap-2 data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-xl py-3"
            >
              <Icon name="Image" size={18} />
              <span className="hidden sm:inline">Галерея</span>
              <span className="sm:hidden">Фото</span>
            </TabsTrigger>
            <TabsTrigger 
              value="materials" 
              className="flex items-center gap-2 data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-xl py-3"
            >
              <Icon name="Blocks" size={18} />
              <span className="hidden sm:inline">Занятия</span>
              <span className="sm:hidden">Уроки</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="program" className="space-y-6 animate-fade-in">
            <Card className="border-none shadow-lg bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="Target" className="text-purple-500" />
                  Цели и задачи программы
                </CardTitle>
                <CardDescription className="text-base">
                  Создание благоприятных условий для полноценного развития детей с задержкой психического развития
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {lessonCategories.map((category) => (
                <Card key={category.id} className="border-none shadow-lg bg-white/90 backdrop-blur overflow-hidden">
                  <CardHeader className={`${category.color} border-b`}>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Icon name={category.icon as any} size={24} />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.lessons.map((lesson, idx) => (
                        <AccordionItem key={idx} value={`${category.id}-${idx}`} className="border rounded-xl overflow-hidden bg-white">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-purple-50 transition-colors">
                            <div className="flex items-center gap-4 text-left">
                              <img 
                                src={lesson.image} 
                                alt={lesson.title}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold text-lg">{lesson.title}</h4>
                                <div className="flex gap-3 mt-1 text-sm text-gray-600">
                                  <span className="flex items-center gap-1">
                                    <Icon name="User" size={14} />
                                    {lesson.age}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Icon name="Clock" size={14} />
                                    {lesson.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6 pt-2">
                            <div className="space-y-4">
                              <p className="text-gray-700">{lesson.description}</p>
                              <div>
                                <h5 className="font-semibold mb-2 flex items-center gap-2">
                                  <Icon name="Package" size={16} className="text-purple-500" />
                                  Необходимые материалы:
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {lesson.materials.map((material, i) => (
                                    <Badge key={i} variant="secondary" className="text-sm py-1">
                                      {material}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents" className="animate-fade-in">
            <div className="space-y-4">
              {documents.map((docGroup, idx) => (
                <Card key={idx} className="border-none shadow-lg bg-white/90 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="FolderOpen" className="text-purple-500" />
                      {docGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {docGroup.items.map((doc, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer border"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                            <Icon name="FileText" className="text-purple-600" size={20} />
                          </div>
                          <div>
                            <p className="font-medium">{doc.title}</p>
                            <p className="text-sm text-gray-500">{doc.type} • {doc.size}</p>
                          </div>
                        </div>
                        <Icon name="Download" className="text-gray-400" size={20} />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {galleryImages.map((item, idx) => (
                <Card key={idx} className="border-none shadow-lg bg-white/90 backdrop-blur overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
                      {item.date}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="materials" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              {lessonCategories.flatMap(cat => cat.lessons).map((lesson, idx) => (
                <Card key={idx} className="border-none shadow-lg bg-white/90 backdrop-blur overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden">
                    <img 
                      src={lesson.image} 
                      alt={lesson.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="secondary">{lesson.age}</Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        {lesson.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{lesson.title}</CardTitle>
                    <CardDescription>{lesson.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-purple-100 mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Heart" className="text-purple-500" size={18} />
            Адаптированная образовательная программа • 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
