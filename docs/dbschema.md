```sql
// VeloMax Database Schema
// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs
// Schema link: https://dbdiagram.io/d/Velomax-68b0dc92777b52b76c12feee

Table categories {
  id varchar [primary key]
  created_at timestamp [not null]
  updated_at timestamp [not null]
  name varchar [not null]
  slug varchar [not null, unique]
  description text
  image_url varchar
  is_active boolean [not null, default: true]
}

Table products {
  id varchar [primary key]
  created_at timestamp [not null]
  updated_at timestamp [not null]
  name varchar [not null]
  article varchar [not null, unique]
  description text
  brand varchar
  price decimal [not null]
  discount_price decimal
  category_id varchar [not null]
  cover_image_url varchar
  images_urls text[] [note: 'Array of image URLs']
  is_active boolean [not null, default: true]
  is_sold_out boolean [default: false]
  amount varchar [not null, note: 'Can be number or "unlimited"']
}

Table services {
  id varchar [primary key]
  created_at timestamp [not null]
  updated_at timestamp [not null]
  name varchar [not null]
  description text
  price decimal [not null]
  discount_price decimal
  duration_in_minutes integer
  is_active boolean [not null, default: true]
  cover_image_url varchar
  images_urls text[] [note: 'Array of image URLs']
}

Table users {
  id varchar [primary key]
  created_at timestamp [not null]
  updated_at timestamp [not null]
  role varchar [not null, note: 'admin | manager | customer | guest']
  email varchar [unique]
  password varchar [not null]
  name varchar [not null]
  phone varchar
  address text
  is_active boolean [not null, default: true]
  orders text[] [note: 'Array of order IDs']
  last_order_date timestamp
}

Table orders {
  id varchar [primary key]
  created_at timestamp [not null]
  updated_at timestamp [not null]
  order_number integer [not null, unique]
  user_id varchar [not null]
  status varchar [not null, note: 'pending | confirmed | shipped | delivered | canceled']
  items jsonb [not null, note: 'Array of OrderItem objects']
  promo_code_id varchar
  note text
  shipping_address text
  phone_number varchar
  completed_at timestamp
}

Table promo_codes {
  id varchar [primary key]
  created_at timestamp [not null]
  updated_at timestamp [not null]
  code varchar [not null, unique]
  description text
  discount_percentage decimal [not null]
  valid_from timestamp [not null]
  valid_until timestamp [not null]
  is_active boolean [not null, default: true]
  usage_limit integer
  used_count integer [not null, default: 0]
}

Table contact_phones {
  id varchar [primary key]
  created_at timestamp [not null]
  updated_at timestamp [not null]
  phone_number varchar [not null]
  provider varchar [not null, note: 'Kyivstar | Vodafone | Lifecell']
}

Table site_settings {
  id varchar [primary key]
  site_name varchar [not null]
  site_description text
  email varchar [not null]
  social_links jsonb [note: 'Object with facebook, instagram, telegram links']
  seo_title varchar [not null]
  seo_description text [not null]
  seo_keywords text[] [not null]
}

// Relationships
Ref: products.category_id > categories.id
Ref: orders.user_id > users.id
Ref: orders.promo_code_id > promo_codes.id

// Notes about relationships:
// - orders.items contains OrderItem objects as jsonb: {type: 'product'|'service', itemId: string, quantity: number}
// - contact_phones are related to site_settings but stored separately for flexibility
```