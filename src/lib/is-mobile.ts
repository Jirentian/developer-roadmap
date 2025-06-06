export function isAndroid(): boolean {
  return (
    typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent)
  );
}

export function isSmallIOS(): boolean {
  return (
    typeof navigator !== 'undefined' && /iPhone|iPod/.test(navigator.userAgent)
  );
}

export function isLargeIOS(): boolean {
  return (
    typeof navigator !== 'undefined' &&
    (/iPad/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
  );
}

export function isIOS(): boolean {
  return isSmallIOS() || isLargeIOS();
}

export function isMobile(): boolean {
  return isAndroid() || isIOS();
}

export function isMobileScreen(): boolean {
  return (
    typeof window !== 'undefined' && (window.innerWidth < 640 || isMobile())
  );
}

export type TailwindScreenDimensions = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export function getTailwindScreenDimension(): TailwindScreenDimensions {
  if (window.innerWidth < 640) {
    return 'sm';
  }

  if (window.innerWidth < 768) {
    return 'md';
  }

  if (window.innerWidth < 1024) {
    return 'lg';
  }

  if (window.innerWidth < 1280) {
    return 'xl';
  }

  return '2xl';
}
