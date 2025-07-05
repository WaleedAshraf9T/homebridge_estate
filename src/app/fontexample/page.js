// Example component showing how to use all Ivy fonts
export default function FontExample() {
  return (
    <div className="p-8 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ivy Ora Display</h2>
        <div className="space-y-2">
          <p className="font-ivy-ora font-thin">Thin (100) - Ivy Ora Display</p>
          <p className="font-ivy-ora font-light">Light (300) - Ivy Ora Display</p>
          <p className="font-ivy-ora font-normal">Regular (400) - Ivy Ora Display</p>
          <p className="font-ivy-ora font-medium">Medium (500) - Ivy Ora Display</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ivy Presto Display</h2>
        <div className="space-y-2">
          <p className="font-ivy-presto-display font-thin">Thin (100) - Ivy Presto Display</p>
          <p className="font-ivy-presto-display font-light">Light (300) - Ivy Presto Display</p>
          <p className="font-ivy-presto-display font-normal">Regular (400) - Ivy Presto Display</p>
          <p className="font-ivy-presto-display font-semibold">Semi Bold (600) - Ivy Presto Display</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ivy Presto Text</h2>
        <div className="space-y-2">
          <p className="font-ivy-presto-text font-thin">Thin (100) - Ivy Presto Text</p>
          <p className="font-ivy-presto-text font-light">Light (300) - Ivy Presto Text</p>
          <p className="font-ivy-presto-text font-normal">Regular (400) - Ivy Presto Text</p>
          <p className="font-ivy-presto-text font-semibold">Semi Bold (600) - Ivy Presto Text</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">TestSohne</h2>
        <div className="space-y-2">
          <p className="font-sohne font-extralight">Extra Light (200) - TestSohne</p>
          <p className="font-sohne font-extralight italic">Extra Light Italic (200) - TestSohne</p>
          <p className="font-sohne font-light">Light (300) - TestSohne</p>
          <p className="font-sohne font-light italic">Light Italic (300) - TestSohne</p>
          <p className="font-sohne font-normal">Regular (400) - TestSohne</p>
          <p className="font-sohne font-normal italic">Regular Italic (400) - TestSohne</p>
          <p className="font-sohne font-medium">Medium (500) - TestSohne</p>
          <p className="font-sohne font-medium italic">Medium Italic (500) - TestSohne</p>
          <p className="font-sohne font-semibold">Semi Bold (600) - TestSohne</p>
          <p className="font-sohne font-semibold italic">Semi Bold Italic (600) - TestSohne</p>
          <p className="font-sohne font-bold">Bold (700) - TestSohne</p>
          <p className="font-sohne font-bold italic">Bold Italic (700) - TestSohne</p>
          <p className="font-sohne font-extrabold">Extra Bold (800) - TestSohne</p>
          <p className="font-sohne font-extrabold italic">Extra Bold Italic (800) - TestSohne</p>
          <p className="font-sohne font-black">Black (900) - TestSohne</p>
          <p className="font-sohne font-black italic">Black Italic (900) - TestSohne</p>
        </div>
      </section>
    </div>
  );
}