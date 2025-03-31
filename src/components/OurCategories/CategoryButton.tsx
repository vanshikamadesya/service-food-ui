import Button from './Button';

export interface CategoryData {
  id?: string | number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  titleAlignment?: 'left' | 'center' | 'right';
  descriptionAlignment?: 'left' | 'center' | 'right';
  buttonAlignment?: 'left' | 'center' | 'right';
  imagePosition?: 'left' | 'right';
  contentOrder?: ('title' | 'description' | 'button')[];
}

export const CategoryButton: React.FC<{ 
  text: string; 
  link?: string; 
  className?: string 
}> = ({ 
  text, 
  link = '#', 
  className = '' 
}) => {
  return (
    <div>
      <Button 
        className={className}
        onClick={() => window.open(link, '_blank')}
      >
        {text}
      </Button>
    </div>
  );
};
