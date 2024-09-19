import { createSlice } from '@reduxjs/toolkit';

interface Course {
  title: string;
  price: number;
  duration: string;
  lessons: number;
  views: number;
  publisher: string;
  level: string;
  photo: string; // Add the photo property
}

interface CourseState {
  cart: Course[];
  course: Course;
}

const initialState: CourseState = {
  cart: [],
  course: {
    title: "Blender 3D Fundamentals",
    price: 15.99,
    duration: "56h 28m",
    lessons: 128,
    views: 12620,
    publisher: "Ryan Curtis",
    level: "Beginner",
    photo: "https://www.gamingonlinux.com/cache/youtube_thumbs/e1bfbf6c276ddeb84532fee6d9b48be2.jpg", 
  },
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cart.push(state.course); 
    },
  },
});

export const { addToCart } = courseSlice.actions;
export default courseSlice.reducer;
