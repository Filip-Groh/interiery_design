# docker build . -t interiery-design
# docker run -p 80:3000 -dit --name interiery-design interiery-design

FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install  

EXPOSE 3000

CMD ["npm", "run", "dev"]