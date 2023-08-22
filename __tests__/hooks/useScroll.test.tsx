import { useScroll } from '@/app/hooks/useScroll';
import { act, renderHook } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';

describe('useScroll', () => {
  it('should response to scroll events', () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);

    act(() => {
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);
  });
});
