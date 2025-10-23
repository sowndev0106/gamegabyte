# Videos Directory

Thư mục này chứa các video files cho project.

## Cấu trúc

```
videos/
├── hero-video.mp4
├── background-loop.mp4
├── product-demo.mp4
└── ...
```

## Usage

### Background Video

```tsx
export function VideoBackground() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10">
        <h1>Your Content</h1>
      </div>
    </div>
  );
}
```

### Video Player

```tsx
export function VideoPlayer() {
  return (
    <video
      controls
      className="w-full rounded-lg"
      poster="/images/video-thumbnail.jpg"
    >
      <source src="/videos/product-demo.mp4" type="video/mp4" />
      <source src="/videos/product-demo.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
```

## Best Practices

1. **Format**: MP4 (H.264) cho compatibility tốt nhất
2. **Compression**: Nén video trước khi upload
3. **Fallback**: Cung cấp image fallback cho các trình duyệt không hỗ trợ
4. **Loading**: Sử dụng `preload="metadata"` hoặc `preload="none"` để tối ưu
5. **Autoplay**: Luôn kết hợp với `muted` và `playsInline`

## Recommended Tools

- HandBrake (compression)
- FFmpeg (conversion)
- CloudConvert (online converter)
