# Настройка EmailJS для отправки email

## Шаг 1: Создание аккаунта EmailJS

1. Перейдите на [https://www.emailjs.com/](https://www.emailjs.com/)
2. Зарегистрируйтесь или войдите в аккаунт
3. Создайте новый проект

## Шаг 2: Настройка Email сервиса

1. В EmailJS dashboard перейдите в раздел "Email Services"
2. Нажмите "Add New Service"
3. Выберите ваш email провайдер (Gmail, Outlook, Yahoo и т.д.)
4. Следуйте инструкциям для подключения
5. Скопируйте **Service ID** (например: `service_xxxxxxx`)

## Шаг 3: Создание Email шаблона

1. Перейдите в раздел "Email Templates"
2. Нажмите "Create New Template"
3. Используйте следующий шаблон:

```
Subject: Новое сообщение от {{from_name}} - {{subject}}

Сообщение:
Имя: {{from_name}}
Email: {{from_email}}
Тема: {{subject}}

Сообщение:
{{message}}

---
Отправлено через форму контактов Go Traffic
```

4. Сохраните шаблон и скопируйте **Template ID** (например: `template_xxxxxxx`)

## Шаг 4: Получение Public Key

1. Перейдите в раздел "Account" → "General"
2. Скопируйте **Public Key** (например: `xxxxxxxxxxxxxxx`)

## Шаг 5: Обновление конфигурации

Откройте файл `src/lib/emailjs.ts` и замените значения:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'ваш_public_key_здесь',
  SERVICE_ID: 'ваш_service_id_здесь',
  TEMPLATE_ID: 'ваш_template_id_здесь',
};
```

## Шаг 6: Настройка переменных окружения (рекомендуется)

Создайте файл `.env.local` в корне проекта:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ваш_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=ваш_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=ваш_template_id
```

И обновите `src/lib/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE',
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_HERE',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID_HERE',
};
```

## Тестирование

1. Запустите приложение: `npm run dev`
2. Перейдите на страницу контактов
3. Заполните форму и отправьте сообщение
4. Проверьте ваш email - должно прийти сообщение

## Безопасность

- Никогда не коммитьте реальные ключи в Git
- Используйте переменные окружения для продакшена
- EmailJS имеет встроеную защиту от спама
