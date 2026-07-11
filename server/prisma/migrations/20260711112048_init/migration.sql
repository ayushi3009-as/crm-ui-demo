-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'SALES',
    "phone" TEXT,
    "avatar" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "approval_status" TEXT NOT NULL DEFAULT 'PENDING',
    "payment_screenshot" TEXT,
    "selected_plan" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "lead_sources" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "color" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "leads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "full_name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "company_name" TEXT,
    "source_id" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "lead_score" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT,
    "city" TEXT,
    "interest" TEXT,
    "assigned_to_id" TEXT,
    "created_by_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "leads_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "lead_sources" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "leads_assigned_to_id_fkey" FOREIGN KEY ("assigned_to_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "leads_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "full_name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "company_name" TEXT,
    "city" TEXT,
    "address" TEXT,
    "notes" TEXT,
    "converted_from_lead_id" TEXT,
    "created_by_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "customers_converted_from_lead_id_fkey" FOREIGN KEY ("converted_from_lead_id") REFERENCES "leads" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "customers_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "activities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lead_id" TEXT,
    "user_id" TEXT,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "activities_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "leads" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "activities_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "import_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "file_name" TEXT NOT NULL,
    "total_rows" INTEGER NOT NULL DEFAULT 0,
    "success_count" INTEGER NOT NULL DEFAULT 0,
    "duplicate_count" INTEGER NOT NULL DEFAULT 0,
    "failed_count" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'PROCESSING',
    "imported_by_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "import_logs_imported_by_id_fkey" FOREIGN KEY ("imported_by_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "password_reset_tokens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires_at" DATETIME NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "password_reset_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "company_settings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "company_name" TEXT,
    "company_email" TEXT,
    "company_phone" TEXT,
    "company_address" TEXT,
    "company_logo" TEXT,
    "company_website" TEXT,
    "timezone" TEXT DEFAULT 'Asia/Kolkata',
    "date_format" TEXT DEFAULT 'DD/MM/YYYY',
    "currency" TEXT DEFAULT 'INR',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "lead_sources_name_key" ON "lead_sources"("name");

-- CreateIndex
CREATE UNIQUE INDEX "customers_converted_from_lead_id_key" ON "customers"("converted_from_lead_id");

-- CreateIndex
CREATE UNIQUE INDEX "password_reset_tokens_token_key" ON "password_reset_tokens"("token");
