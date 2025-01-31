interface Props {
  title: string;
  description: string;
  imageUrl: string;
  keywords: string;
}

const setMetadata = ({ title, description, imageUrl, keywords }: Props) => {
  document.title = title;

  let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement; 
  if (!metaDescription) {
    metaDescription = document.createElement('meta') as HTMLMetaElement;
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = description;

  let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta') as HTMLMetaElement;
    metaKeywords.name = 'keywords';
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = keywords;

  let ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement;
  if (!ogImage) {
    ogImage = document.createElement('meta') as HTMLMetaElement;
    ogImage.setAttribute('property', 'og:image');
    document.head.appendChild(ogImage);
  }
  ogImage.content = imageUrl;
};

export default setMetadata;