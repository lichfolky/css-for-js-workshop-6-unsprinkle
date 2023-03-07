import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcset={`
            ${src.replace('.jpg', '.avif')} 1x,
            ${src.replace('.jpg', '@2x.avif')} 2x,
            ${src.replace('.jpg', '@3x.avif')} 3x
          `}
          />
          <source
            type="image/webp"
            srcset={`
            ${src.replace('.jpg', '.webp')} 1x,
            ${src.replace('.jpg', '@2x.webp')} 2x,
            ${src.replace('.jpg', '@3x.webp')} 3x
          `}
          />
          <Image
            alt={alt}
            src={src}
          />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
object-fit: cover;
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden; 
    max-width: 100%;
    text-overflow: ellipsis;

    & > * {
    background: var(--color-gray-300);
    }
  `;

const Tag = styled.li`
  display: inline;
  padding: 0 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  line-height: 1.8;

  &:not(:last-of-type)::after{
    content: "-";
    right: -0.5rem;
    position: relative;
    background: white;
    font-size: 0.875rem;
    line-height: 1.8;
    color: white;
  }
/* 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */

`;

export default PhotoGridItem;
