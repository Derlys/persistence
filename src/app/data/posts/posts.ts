import {Post} from '../models/post';
declare var require: any;

export const posts: Post[] =[

    {
        createdAt: '2020-09-03',
    title: '5 claves para empezar como developer in training',
    content: require('!!raw-loader!./post-1.md')
      .default,
    // content:'',
    imgUrl: '/assets/images/art5.jpg',
    description:
      '¿Cómo comienza mi aprendizaje de código? Es algo que debí pensar detenidamente porque no estaba realmente consciente del momento exacto en que hice mi primera línea de código.',
    published: true,
    id: '5-claves-para-empezar-como-developer-in-training',
  },


]