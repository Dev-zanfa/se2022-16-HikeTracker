CREATE TABLE "Points" (
	"id" INTEGER NOT NULL UNIQUE,
	"latitude" TEXT NOT NULL,
	"longitude" TEXT NOT NULL,
	"altitude" INTEGER NOT NULL,
	"name" TEXT NOT NULL,
	"address" TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "User" (
	"id" INTEGER NOT NULL UNIQUE,
	"email" TEXT NOT NULL UNIQUE,
	"username" TEXT NOT NULL,
	"role" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"salt" TEXT NOT NULL,
	"name" TEXT,
	"surname" TEXT,
	"phoneNumber" TEXT,
	"isVerified" INTEGER NOT NULL,
	"token"	TEXT,
	"tokenExpires" TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "Hike" (
	"id" INTEGER NOT NULL UNIQUE,
	"title"	TEXT NOT NULL,
	"length" INTEGER NOT NULL,
	"expectedTime" INTEGER NOT NULL,
	"ascent" INTEGER NOT NULL,
	"difficulty" TEXT NOT NULL,
	"startPointId" INTEGER NOT NULL,
	"endPointId" INTEGER NOT NULL,
	"description" TEXT,
	"gpxPath" TEXT,
	"userId" INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("startPointId") REFERENCES "Points"("id"),
	FOREIGN KEY("endPointId") REFERENCES "Points"("id"),
	FOREIGN KEY("userId") REFERENCES "User"("id")
);

CREATE TABLE "ReferencePoints" (
	"hikeId" INTEGER NOT NULL,
	"pointId" INTEGER NOT NULL,
	PRIMARY KEY("hikeId","pointId"),
	FOREIGN KEY("hikeId") REFERENCES "Hike"("id"),
	FOREIGN KEY("pointId") REFERENCES "Points"("id")
);

CREATE TABLE "Hut" (
	"id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"numOfBeds"	INTEGER NOT NULL,
	"description"	TEXT NOT NULL,
	"phoneNumber"	TEXT NOT NULL,
	"email"	TEXT NOT NULL,
	"website"	TEXT,
	"pointId"	INTEGER NOT NULL,
	"ownerId"	INTEGER NOT NULL,
	FOREIGN KEY("pointId") REFERENCES "Points"("id"),
	FOREIGN KEY("ownerId") REFERENCES "User"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "HutImages" (
	"imageId"	INTEGER NOT NULL UNIQUE,
	"hutId"	INTEGER NOT NULL,
	"imageName"	TEXT NOT NULL,
	PRIMARY KEY("imageId" AUTOINCREMENT),
	FOREIGN KEY("hutId") REFERENCES "Hut"("id")
);