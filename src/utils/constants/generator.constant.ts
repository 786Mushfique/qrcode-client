export interface IGeneratorType {
  value: string;
  label: string;
}

export const GENERATOR_TYPES: IGeneratorType[] = [
  {
    value: 'url',
    label: 'URL',
  },
  {
    value: 'text',
    label: 'Теxt',
  },
];

export const ACCEPTED_LOGO_FILE_TYPES = ['png', 'jpg', 'jpeg', 'svg'];
