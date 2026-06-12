Centro Thrift Master Specification v1.1
Project Vision
Centro Thrift is a warm, curated, unisex online thrift store focused on making discovery, reservation, and purchase of one-off thrift items effortless.
The platform should eliminate inventory chaos caused by WhatsApp status dumps and replace it with a structured inventory, reservation, and delivery workflow.
Primary goals:
•	Showcase products professionally
•	Reduce manual inventory tracking
•	Prevent double-selling
•	Simplify reservations
•	Support scheduled deliveries
•	Scale from a small thrift operation to a larger ecommerce platform
________________________________________
Brand Direction
Brand Personality
•	Warm
•	Curated
•	Cozy
•	Trustworthy
•	Minimal
•	Modern
•	Human
•	Unisex
Not
•	Loud
•	Hyper-luxury
•	Streetwear hype culture
•	Corporate
•	Overly feminine
________________________________________
Design Philosophy
Target feeling:
Pinterest + Vintage Boutique + Cozy Coffee Shop
The website should feel curated and intentional rather than crowded.
________________________________________
Color Palette
Primary Background
Warm White
Secondary Background
Soft Beige
Accent Color
Warm Brown
Primary Text
Charcoal
Success State
Muted Sage Green
Reserved State
Soft Amber
________________________________________
Typography
Heading Font
Playfair Display
Used for:
•	Hero headlines
•	Collection titles
•	Section titles
Body Font
Inter
Used for:
•	Navigation
•	Product information
•	Dashboard
•	Forms
________________________________________
Product Data Standard v1.0
SKU Format
CT-0001 CT-0002 CT-0003
________________________________________
Product Title Format
[Color] + [Type]
Examples:
•	Pink Knit Crop Top
•	Brown Oversized Hoodie
•	Black Denim Jacket
________________________________________
Categories
•	Crop Tops
•	T-Shirts
•	Hoodies
•	Sweaters
•	Jackets
•	Jeans
•	Shorts
•	Skirts
•	Dresses
•	Accessories
________________________________________
Gender
•	Women’s
•	Men’s
•	Unisex
________________________________________
Sizes
•	XS
•	S
•	M
•	L
•	XL
•	XXL
________________________________________
Condition
•	Excellent
•	Very Good
•	Good
________________________________________
Price
Stored as number only.
Example:
120
Displayed as:
K120
________________________________________
Stock
Default:
1
________________________________________
Product Status
•	AVAILABLE
•	RESERVED
•	SOLD
•	HIDDEN
________________________________________
Images
Minimum:
3
Ideal:
5
Order:
1.	Front
2.	Side
3.	Back
4.	Detail
5.	Optional Styling Shot
________________________________________
Product Description Template
Product Name
Size
Condition
Short description
One-of-a-kind thrift find.
________________________________________
Reservation & Order Standard v1.0
Reservation ID Format
RSV-0001
________________________________________
Order ID Format
ORD-0001
________________________________________
Reservation Status
•	ACTIVE
•	EXPIRED
•	PAID
•	CANCELLED
________________________________________
Payment Status
•	PENDING
•	CONFIRMED
•	REFUNDED
________________________________________
Delivery Status
•	PENDING
•	SCHEDULED
•	OUT_FOR_DELIVERY
•	DELIVERED
________________________________________
Delivery Days
•	Monday
•	Wednesday
•	Saturday
________________________________________
Reservation Timer
Standard Reservation:
15 Minutes
Large Cart Reservation:
10 Minutes
________________________________________
Reservation Rule
Cart does NOT reserve inventory.
Only confirmed reservations reserve inventory.
________________________________________
Product State Transitions
AVAILABLE
→ RESERVED
→ SOLD
or
AVAILABLE
→ RESERVED
→ AVAILABLE
________________________________________
Operational Rules
1.	No product can become SOLD without an Order.
2.	No Order exists without payment confirmation.
3.	Reservations expire automatically.
4.	Only AVAILABLE products can be reserved.
5.	One active reservation per customer.
6.	Every product must have a SKU.
________________________________________
Inventory & Catalog Architecture v1.0
Collections
•	Women
•	Men
•	Unisex
________________________________________
Seasonal Collections
Examples:
•	Winter Picks
•	New Arrivals
•	Denim Drop
•	Festive Finds
Route:
/collections/[slug]
________________________________________
Product Visibility Rules
AVAILABLE
Visible and purchasable
RESERVED
Visible but cannot be reserved
SOLD
Visible for 7 days then hidden
HIDDEN
Admin only
________________________________________
Search
Searchable Fields:
•	Title
•	Category
•	Color
________________________________________
Filters
•	Gender
•	Category
•	Size
•	Condition
•	Availability
________________________________________
Sorting
•	Newest
•	Price Low → High
•	Price High → Low
________________________________________
Customer Journey v1.0
Emotional Progression:
Curiosity
→ Discovery
→ Interest
→ Confidence
→ Commitment
→ Relief
→ Excitement
________________________________________
Customer Flow
Homepage
→ Collection
→ Product Page
→ Add To Cart
→ Cart
→ Reserve via WhatsApp
→ Reservation
→ Payment
→ Delivery
________________________________________
Design System v1.1
Buttons
Primary
•	Brown background
•	White text
Secondary
•	White background
•	Brown border
Ghost
•	Minimal text button
________________________________________
Border Radius
12px
________________________________________
Status Badges
Available
Reserved
Sold
(No hearts or gender-coded icons)
________________________________________
Core Components
•	Navbar
•	Hero
•	Product Card
•	Collection Card
•	Button
•	Badge
•	Search Bar
•	Filter Panel
•	Cart Drawer
•	Reservation Summary
•	Footer
________________________________________
Full Screen Inventory & Navigation Map v1.0
Public Pages
/
Homepage
/shop
All Products
/women
Women’s Collection
/men
Men’s Collection
/collections/[slug]
Seasonal Collection
/products/[slug]
Product Detail Page
/cart
Cart
________________________________________
Admin Pages
/admin/login
Login
/admin
Dashboard
/admin/products
Products
/admin/products/new
Add Product
/admin/products/[id]
Edit Product
/admin/reservations
Reservations
/admin/reservations/[id]
Reservation Detail
/admin/orders
Orders
/admin/orders/[id]
Order Detail
/admin/deliveries
Deliveries
/admin/customers
Customers
/admin/settings
Settings
________________________________________
Admin Roles
Admin
Full access
Sales Assistant
Can:
•	Create products
•	Edit products
•	Manage reservations
•	Manage deliveries
•	Mark products sold
Cannot:
•	Modify system settings
•	Remove admin access
________________________________________
MVP Scope v1.0
Customer Side
•	Homepage
•	Collections
•	Product Detail
•	Cart
•	WhatsApp Reservation
Admin Side
•	Authentication
•	Product CRUD
•	Reservation Management
•	Order Management
•	Delivery Management
________________________________________
Technical Principles
•	Mobile First
•	SOLID Principles
•	Service Layer Architecture
•	Repository Pattern
•	Scalable Component System
•	Clear Separation of Concerns
•	Reusable UI Components
•	Clean Database Relationships
________________________________________
Future Features
•	Online Mobile Money Payments
•	Automated Reservation Expiry
•	Customer Accounts
•	Wishlist
•	Product Recommendations
•	Delivery Tracking
•	Analytics Dashboard
•	Promotional Campaign Management
________________________________________
End of Centro Thrift Master Specification v1.0
Append to v1.0 making it v1.1:

DATABASE DESIGN v1.0
Core Tables
USERS
PRODUCTS
PRODUCT_IMAGES
COLLECTIONS
PRODUCT_COLLECTIONS
RESERVATIONS
RESERVATION_ITEMS
ORDERS
ORDER_ITEMS
AUDIT_LOGS
NOTIFICATIONS
________________________________________
USER ROLES
ADMIN
SALES_ASSISTANT
________________________________________
DATABASE RULES
1.	SKU must be unique.
2.	Collection slug must be unique.
3.	Reservation number must be unique.
4.	Order number must be unique.
5.	Product must contain at least one image.
6.	Stock cannot be negative.
7.	Price cannot be negative.
8.	A SOLD product must belong to an Order.
9.	Only AVAILABLE products may be reserved.
________________________________________
SERVICE ARCHITECTURE v1.0
Page
↓
Component
↓
Service
↓
Repository
↓
Prisma
↓
Database
________________________________________
SERVICES
AuthService
ProductService
CollectionService
ReservationService
OrderService
DeliveryService
CustomerService
ImageService
________________________________________
REPOSITORY RULES
Repositories handle database access only.
Repositories never contain business logic.
All business rules belong inside Services.
________________________________________
FOLDER STRUCTURE v1.0
src/
app/
components/
modules/
services/
repositories/
prisma/
lib/
hooks/
types/
constants/
validators/
utils/
middleware/
________________________________________
MODULE STRUCTURE
modules/
auth/
products/
collections/
reservations/
orders/
deliveries/
customers/
________________________________________
API RESPONSE STANDARD
Success
{
success: true,
data: {}
}
Failure
{
success: false,
message: ""
}
________________________________________
DTO STANDARD
Products
CreateProductDto
UpdateProductDto
ProductResponseDto
Collections
CreateCollectionDto
UpdateCollectionDto
CollectionResponseDto
Reservations
CreateReservationDto
ReservationResponseDto
Orders
CreateOrderDto
OrderResponseDto
Deliveries
ScheduleDeliveryDto
________________________________________
UI SCREEN CONTRACTS v1.0
PUBLIC
Homepage
Shop
Collection Page
Product Page
Cart
Reservation Success
________________________________________
ADMIN
Login
Dashboard
Products
Add Product
Edit Product
Collections
Reservations
Orders
Deliveries
Settings
________________________________________
ADMIN DASHBOARD MODULES
Metrics
Products
Reservations
Orders
Deliveries
Customers
Settings
Activity Feed
________________________________________
DEPLOYMENT ARCHITECTURE
Frontend
Vercel
Backend
Next.js API Routes
Database
Supabase PostgreSQL
Images
Cloudinary
Authentication
NextAuth
________________________________________
SPRINT ROADMAP
Sprint 1
Project Setup
Next.js
TypeScript
Tailwind
Prisma
PostgreSQL
Authentication
________________________________________
Sprint 2
Authentication
Role System
Protected Routes
________________________________________
Sprint 3
Product CRUD
________________________________________
Sprint 4
Collections
________________________________________
Sprint 5
Storefront
Homepage
Shop
Product Detail
Search
Filters
________________________________________
Sprint 6
Cart
Reservations
WhatsApp Workflow
________________________________________
Sprint 7
Orders
Deliveries
________________________________________
Sprint 8
Deployment
________________________________________
OFFICIAL SOURCE OF TRUTH
This document is the authoritative specification for Centro Thrift.
All future code, architecture decisions, Codex prompts, database changes, UI changes, and feature additions must remain aligned with this specification unless a newer version explicitly supersedes it.

