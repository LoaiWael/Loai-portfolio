export type themeType = 'dark' | 'light';

export type jsonData = 'contributors' | 'open-source' | 'technologies' | 'threeD' | 'ui-ux' | 'websites';

export type category = 'websites' | 'open-source' | 'ui-ux' | '3d-models';

type contributor = 'LoaiWaelHassan' | 'SuperSimpleDev';

export type technologyKeys = 'c4d' | 'picsart' | 'lightroom' | 'figma' | 'adobeColor' | 'html' | 'css' | 'js' | 'jquery' | 'bootstrap' | 'stitch' | 'typescript';

export interface Icontributor {
  name: string
  position: string
  photo: string
  communication: string
}

export interface Itechnology {
  title: string
  id: string
  icon: string
}

export interface Iwork {
  title: string
  quickDoc: string
  photoPrev: string
  creationDate: string
  doc: string
  technologies: {
    name: technologyKeys
    techUsage: string
  }[]
  contributors: contributor[]
  src: string[]
  numOfImages: number
  images: string[]
}