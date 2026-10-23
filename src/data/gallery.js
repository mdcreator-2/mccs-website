/**
 * MCCS Diplomatic Archives - 2025 MUN Edition Photography
 * Curated high-resolution photographic collection from NIT Patna MUN 2025
 */

export const GALLERY_CHAPTERS = [
  'All',
  'Assembly & Dais',
  'Floor Deliberations',
  'Bilateral Caucus',
  'Awards & Plenary',
];

export const galleryPhotos = [
  { id: 4, file: 'DSC_0147.jpg', chapter: '', title: '' },
  { id: 5, file: 'DSC_0151.jpg', chapter: '', title: '' },
  { id: 6, file: 'DSC_0152.jpg', chapter: '', title: '' },
  { id: 9, file: 'DSC_0164.jpg', chapter: '', title: '' },
  { id: 10, file: 'DSC_0166.jpg', chapter: '', title: '' },
  { id: 12, file: 'DSC_0173.jpg', chapter: '', title: '' },
  { id: 16, file: 'DSC_0198.jpg', chapter: '', title: '' },
  { id: 22, file: 'DSC_0254.jpg', chapter: '', title: '' },
  { id: 33, file: 'DSC_0313.jpg', chapter: '', title: '' },
  { id: 46, file: 'DSC_0372.jpg', chapter: '', title: '' },
  { id: 49, file: 'DSC_0387.jpg', chapter: '', title: '' },
].map((item) => ({
  ...item,
  number: String(item.id).padStart(2, '0'),
  image: `/images/mun-2025/${item.file}`,
  thumb: `/images/mun-2025/thumbs/${item.file}`,
  year: '2025',
}));

export default galleryPhotos;
