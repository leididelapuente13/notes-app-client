export type HeaderControlOptions = 'archive' | 'delete' | 'restore' | 'save';
export type RightMenuOptions = Exclude<HeaderControlOptions, 'save'>;
