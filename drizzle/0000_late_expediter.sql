CREATE TABLE "colaborators" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"document" text NOT NULL,
	CONSTRAINT "colaborators_document_unique" UNIQUE("document")
);
--> statement-breakpoint
CREATE TABLE "points" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"colaborator_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"company" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "points" ADD CONSTRAINT "points_colaborator_id_colaborators_id_fk" FOREIGN KEY ("colaborator_id") REFERENCES "public"."colaborators"("id") ON DELETE no action ON UPDATE no action;