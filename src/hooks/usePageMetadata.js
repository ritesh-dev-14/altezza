import { useEffect } from 'react';

export default function usePageMetadata(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    let descriptionElement = document.querySelector('meta[name="description"]');
    const createdDescription = !descriptionElement;

    if (!descriptionElement) {
      descriptionElement = document.createElement('meta');
      descriptionElement.name = 'description';
      document.head.append(descriptionElement);
    }

    const previousDescription = descriptionElement.content;
    document.title = `${title} | ALTEZZA`;
    descriptionElement.content = description;

    return () => {
      document.title = previousTitle;
      if (createdDescription) {
        descriptionElement.remove();
      } else {
        descriptionElement.content = previousDescription;
      }
    };
  }, [description, title]);
}
