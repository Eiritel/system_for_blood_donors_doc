---
title: ERD
sidebar_position: 1
---

# Модель данных

import Drawio from '@theme/Drawio'
import diagram from '!!raw-loader!./model.drawio';

<Drawio content={diagram} editable={false} />

### Users

| **Название**      | **Описание**                                           |
|--------------------|-------------------------------------------------------|
| user_id (PK)     | Уникальный идентификатор пользователя.                |
| name             | Имя пользователя.                                     |
| last_name        | Фамилия пользователя.                                 |
| email            | Электронная почта пользователя.                       |
| phone           | Номер телефона.                                       |
| city_id (FK)     | Связь с городом, где проживает донор.                 |

### Users_blood_types (Группа крови донора)
| Название         | Описание                             |
|-------------------|-------------------------------------|
| `user_id` (PK, FK) | Идентификатор донора.               |
| `blood_type`       | Информация о группе крови.          |

---

### Organizers (Организаторы)
| Название          | Описание                             |
|--------------------|-------------------------------------|
| `organizer_id` (PK) | Уникальный идентификатор организатора. |
| `name`             | Название организатора или организации. |
| `phone`            | Номер телефона.                    |
| `city_id` (FK)     | Связь с городом, где находится организатор. |

---

### Events (Акции)
| Название           | Описание                             |
|---------------------|-------------------------------------|
| `event_id` (PK)     | Уникальный идентификатор акции.      |
| `title`             | Название акции.                     |
| `date`              | Дата проведения акции.              |
| `organizer_id` (FK) | Связь с организатором.               |
| `city_id` (FK)      | Связь с городом, где проводится акция. |

---

### Event_details (Детали акций)
| Название          | Описание                             |
|--------------------|-------------------------------------|
| `event_id` (PK, FK) | Идентификатор акции.                |
| `description`       | Подробное описание акции.           |
| `location`          | Место проведения акции.             |

---

### Registrations (Регистрации)
| Название           | Описание                             |
|---------------------|-------------------------------------|
| `registration_id` (PK) | Уникальный идентификатор регистрации. |
| `user_id` (FK)        | Связь с пользователем, который зарегистрировался. |
| `event_id` (FK)       | Связь с акцией, на которую зарегистрировались. |
| `timestamp`           | Дата и время регистрации.          |

---

### Notifications (Уведомления)
| Название           | Описание                             |
|---------------------|-------------------------------------|
| `notification_id` (PK) | Уникальный идентификатор уведомления. |
| `message`            | Текст уведомления.                 |
| `timestamp`          | Дата и время отправки уведомления. |
| `user_id` (FK)       | Связь с пользователем, которому адресовано уведомление. |

---

### Notification_types (Тип уведомлений)
| Название           | Описание                             |
|---------------------|-------------------------------------|
| `notification_id` (PK, FK) | Идентификатор уведомления.      |
| `type`             | Тип уведомления.                    |

### Status_events (Статусы мероприятий)
| Название           | Описание                                    |
|---------------------|--------------------------------------------|
| `event_id` (PK, FK) | Идентификатор мероприятия из таблицы Events. |
| `status`            | Статус мероприятия.                        |

---

### Status_registrations (Статусы регистраций)
| Название                 | Описание                                      |
|---------------------------|----------------------------------------------|
| `registration_id` (PK, FK) | Идентификатор регистрации из таблицы Registrations. |
| `status`                  | Статус регистрации.                          |

---

### Cities (Города)
| Название       | Описание                   |
|-----------------|---------------------------|
| `city_id` (PK)  | Уникальный идентификатор города. |
| `city`          | Название города.           |

### **Связи между сущностями:**

  1. **Users (1) ↔ (0/N) Registrations** через `user_id`:
Один пользователь может иметь несколько регистраций / или не иметь регистрации вообще.

  1. **Events (1) ↔ (0/N) Registrations** через `event_id`:
На одну акцию может быть зарегистрировано много пользователей / или может никто не зарегистрироваться.

  1. **Organizers (1) ↔ (1/N) Events** через `organizer_id`:
Один организатор может проводить одну или несколько акций.

  1. **Events (1) ↔ (1) Event_details** через `event_id`:
Каждая акция имеет только одно описание.

  1. **Registrations (1) ↔ (0/N) Notifications** через `user_id`:
Один пользователь может получать множество уведомлений / или вообще не получать уведомления (никуда не зарегистрирован).

  1. **Users (1) ↔ (1) Users_types** через `user_id`:
У каждого пользователя только одна группа крови.

  1. **Cities (1) ↔ (0/N) Users** через `city_id`:
В одном городе может быть много доноров, так и не быть никого.

  1. **Cities (1) ↔ (0/N) Events** через `city_id`:
В одном городе может быть как много акций, так и не быть ни одной.

  1. **Cities (1) ↔ (1/N) Organizers** через `city_id`:
В одном городе может как один организатор акций, так и несколько.

  1.  **Events (1) ↔ (1) Status_events** через `event_id`:
Каждая акция имеет только один статус (например, "идёт регистрация", "отменена", "в процессе").

  1.  **Registrations (1) ↔ (1) Status_registrations** через `registration_id`:
Каждая регистрация имеет только один статус (например, "ожидание", "одобрено", "отклонено").

  1.  **Notifications (1) ↔ (1) Notifications_types** через `notification_id`:
Каждое уведомление имеет только один тип (например, "пуш-уведомление", "письмо на e-mail", "сообщение на телефонный номер донора").

