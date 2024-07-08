import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.2s', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('0.2s', style({ opacity: 0 })),
  ])
])

export const fadeInOutZoomAnimation = trigger('fadeInOutZoomAnimation', [
  transition(':enter', [
    style({ opacity: 0, scale: 0.98 }),
    animate('0.2s', style({ opacity: 1, scale: 1 })),
  ]),
  transition(':leave', [
    animate('0.2s', style({ opacity: 0, scale: 0.98 })),
  ])
])

export const fadeInOutVerticalTrigger = trigger('fadeInOutVerticalTrigger', [
  transition(':enter', [
    style({ opacity: 0, transform: '{{ translateFrom }}' }),
    animate('0.1s', style({ opacity: 1, transform: '{{ translateTo }}' })),
  ], { params: { translateFrom: 'translateY(-5px)', translateTo: 'translateY(0)' } }),
  transition(':leave', [
    animate('0.1s', style({ opacity: 0, transform: '{{ translateFrom }}' })),
  ], { params: { translateFrom: 'translateY(-5px)', translateTo: 'translateY(0)' } })
])