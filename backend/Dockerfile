# Stage 1: Build
FROM maven:3.9.4-eclipse-temurin-17 AS build
WORKDIR /app

# Copy Maven settings with retry configuration
COPY .mvn/settings.xml /root/.m2/settings.xml

COPY pom.xml .
COPY src ./src

# Run Maven with retry and timeout settings
RUN mvn clean package -DskipTests -Dmaven.wagon.http.retryHandler.count=3 -Dmaven.wagon.httpconnectionManager.ttlSeconds=120

# Stage 2: Run
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=build /app/target/artcafe-backend-1.0.0.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
