# Event Card React Component Library

![Alt text](https://github.com/Kastriot78/responsive-card-component/blob/main/Screenshot_2.jpg)

1. The Event Card React Component Library provides a reusable and customizable card component specifically designed for displaying event information in React applications. 
2. This library simplifies the process of creating visually appealing and interactive event cards, making it easier for developers to showcase events in their applications.

# Installation
npm install event-card-react

# Usage
To use the Event Card component in your React application, import it into your component file and pass the necessary props:
import Card from 'responsive-card';
<div className="row mt-5">
  <Card
    link="#"
    imageSrc="https://demo.ovathemewp.com/em4u/wp-content/uploads/2017/10/event_business_1-1-640x384.jpg"
    thumbTitle="Chickago City"
    monthTitle="Nov"
    dateTitle="15 2023"
    cardTitle="Course about business"
    statusTitle="Upcoming"
    textTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mae..."
    buttonLink="#"
    buttonText="No Ticket"
  />
</div>

# Props
1. link (string): The URL link for the card.
2. imageSrc (string): The URL of the event's image.
3. thumbTitle (string): The thumbnail title.
4. monthTitle (string): The month of the event.
5. dateTitle (string): The date of the event.
6. cardTitle (string): The title of the card.
7. statusTitle (string): The status of the event.
8. textTitle (string): A brief description of the event.
9. buttonLink (string): The URL link for the button.
10. buttonText (string): The text displayed on the button.

# Customization
The Event Card component can be customized using CSS to match the styling of your application. You can override the default styles by targeting the class names used in the component.
