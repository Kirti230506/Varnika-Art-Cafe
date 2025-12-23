<<<<<<< HEAD
# Varnika-Art-Cafe
An Art Café combines coffee and creativity, offering art displays, workshops, and a cozy ambiance for art lovers and coffee enthusiasts.
=======
# ArtCafe Project

Spring Boot + React app with MySQL. Includes Dockerfiles for `backend`, `frontend`, and a `docker-compose.yml` to run the whole stack.

## Architecture
- Client (React) communicates with the API (Spring Boot) over HTTP.
- API uses Spring MVC + Spring Data JPA to persist domain entities to MySQL.
- MySQL runs as a container; the API connects via the compose network host `artcafe-mysql`.
- Docker Compose orchestrates all services with health checks and dependency ordering.

High-level flow:
1) User submits a booking in the React app.
2) Frontend posts JSON to `POST /api/bookings`.
3) Spring Boot maps JSON to the `Booking` entity and saves via JPA.
4) Data is stored in MySQL (`bookings` table).

## Stack
- Backend: Spring Boot (Java 17, Maven), port `8080`
- Frontend: React (CRA), port `3000`
- Database: MySQL 8, internal port `3306` mapped to host `3308` (default compose) and `3307` (override)

### Technologies Used
- Spring Boot 3 (Web, Data JPA)
- Hibernate (JPA provider)
- MySQL 8
- React 18 + React Router DOM 6
- Docker, Docker Compose
- Maven (backend), npm (frontend)

### Project Highlights
- End-to-end containerized setup: one command starts DB, API, and UI.
- Health-checked MySQL with conditional startup for backend reliability.
- Clean REST API for bookings with entity and repository pattern.
- Simple React UI with routing and a booking form posting JSON.
- Environment-aligned DB credentials across compose and Spring config.

## Prerequisites
- Docker Desktop running (Windows: enable WSL 2 backend)
- Optional: MySQL client (Workbench/DBeaver) for DB access

## Quick start (Docker Compose)
Windows PowerShell:

```powershell
cd C:\project\artcafe-project
# build + start all
docker compose up -d --build
```

Wait for services to be healthy:
```powershell
docker compose ps
```

### URLs
- Frontend: http://localhost:3000
- Backend: http://localhost:8080

### Database connection
- Host: `localhost`
- Port: `3308` (or `3307` if `docker-compose.override.yml` is applied)
- User: `artcafe`
- Password: `artcafe123`
- Database: `artcafe_db`

Find the active port:
```powershell
docker compose ps
```

## Compose lifecycle
- Stop (keep containers):
```powershell
docker compose stop
```
- Stop + remove containers (keep volumes):
```powershell
docker compose down
```
- Stop + remove containers and volumes (wipes MySQL data):
```powershell
docker compose down -v
```
- Rebuild a service and restart it:
```powershell
# frontend
docker compose build frontend; docker compose up -d frontend
# backend
docker compose build backend; docker compose up -d backend
```
- Logs:
```powershell
docker logs -f artcafe-mysql
docker logs -f artcafe-backend
docker logs -f artcafe-frontend
```

## Admin DB UI (optional, no project changes)
Launch Adminer (browser UI) on the compose network:
```powershell
# find network (usually artcafe-project_default)
docker network ls

# run Adminer at http://localhost:8081
docker run -d --name artcafe-adminer `
  --network artcafe-project_default `
  -p 8081:8080 `
  -e ADMINER_DEFAULT_SERVER=artcafe-mysql `
  adminer:latest
```
Login:
- System: MySQL
- Server: `artcafe-mysql`
- Username: `artcafe`
- Password: `artcafe123`
- Database: `artcafe_db`

Remove when done:
```powershell
docker rm -f artcafe-adminer
```

## Development notes
- Frontend dev server runs inside the container. Adjust scripts in `frontend/package.json` as needed.
- Backend rebuild: changes to Java require rebuilding the `backend` image (see above).
- API URL in frontend: `Booking.js` posts to `http://localhost:8080`. For environments beyond local, consider a `REACT_APP_API_URL` env and use it in fetch calls.

## Troubleshooting
- Docker not running: open Docker Desktop; ensure WSL 2 backend enabled.
- Port conflicts: change host ports in `docker-compose.yml`/override or free the port.
- Frontend router error: ensure `react-router-dom` installed (already included).
- MySQL not ready: compose includes a healthcheck; backend waits for DB health.
- Old null booking rows: fixed in backend; submit new bookings. To clean:
```powershell
docker exec -it artcafe-mysql mysql -uartcafe -partcafe123 -e "DELETE FROM artcafe_db.bookings WHERE name IS NULL AND email IS NULL AND workshop_type IS NULL;"
```

## Service credentials (default)
- MySQL: user `artcafe` / pass `artcafe123` / DB `artcafe_db`

## Clean up
Remove containers, images, and dangling resources:
```powershell
docker compose down -v
docker system prune -f
```
>>>>>>> 4606312 (Initial commit - Varnika Art Cafe project)
