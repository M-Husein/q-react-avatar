// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import { Avatar, AvatarGroup } from './components/avatar';

function App(){
  // const [count, setCount] = useState(0);

  const OPTION_SIZE = [
    { size: "xs", name: "Elizabeth Olsen" },
    { size: "sm", name: "John Doe" },
    { size: "md", name: "Peter Parker" },
    { size: "lg", name: "Muhamad Husein", src: "/img/muhamad_husein.jpg" },
  ];

  // const GROUPS = [
  //   { name: "Muhamad Husein", src: "/img/muhamad_husein.jpg" },
  //   { name: "Siti Umaya", src: "/img/hijab_girl.jpg" },
  //   { name: "Elizabeth Olsen" },
  //   { name: "John Doe" },
  //   { name: "Peter Parker" },
  // ];

  return (
    <>
      <nav className="bg-blue-100 sticky top-0 z-10 shadow-md">
        <div className="flex items-center py-2 px-4 max-w-screen-xl mx-auto">
          <a href="/" className="no-underline font-bold py-1 text-lg">Avatar</a>
          <a href="https://github.com/M-Husein" target="_blank" rel="noopener noreferrer" className="no-underline font-bold block ml-auto">
            <img alt="github" src="/img/github.svg" height={25} className="block" />
          </a>
          <a href="https://www.linkedin.com/in/muhamad-husein" target="_blank" rel="noopener noreferrer" className="no-underline font-bold block ml-4">
            <img alt="github" src="/img/linkedin.svg" height={25} className="block" />
          </a>
        </div>
      </nav>
    
      <div className="p-4">
        <section>
          <h1 className="h3"><code>{'<AvatarGroup />'}</code></h1>
          <h2 className="h4">Usage</h2>
          
          <h3 className="h5"><code>size="xs"</code></h3>
          <AvatarGroup
            size="xs"
            maxLength={5}
          >
            <Avatar src="/img/muhamad_husein.jpg" alt="Muhamad Husein" className="rounded-full" />
            <Avatar src="/img/hijab_girl.jpg" alt="Siti Umaya" className="rounded-full" />
            <Avatar src="/img/hijab_girl_2.webp" alt="Angelina Rose" className="rounded-full" />
            <Avatar src="/img/hijab_girl_3.jpg" alt="Elizabeth Olsen" className="rounded-full" />
            <Avatar src="/img/hijab_girl_4.jpg" alt="Jane Doe Taylor" className="rounded-full" />
            <Avatar alt="John Doe Taylor" className="rounded-full" />
            <Avatar alt="Peter Parker" className="rounded-full" />
          </AvatarGroup>
          <br /><br />
          <h3 className="h5"><code>size="sm"</code></h3>
          <AvatarGroup
            size="sm"
            maxLength={5}
          >
            <Avatar src="/img/muhamad_husein.jpg" alt="Muhamad Husein" className="rounded-full" />
            <Avatar src="/img/hijab_girl.jpg" alt="Siti Umaya" className="rounded-full" />
            <Avatar src="/img/hijab_girl_2.webp" alt="Angelina Rose" className="rounded-full" />
            <Avatar src="/img/hijab_girl_3.jpg" alt="Elizabeth Olsen" className="rounded-full" />
            <Avatar src="/img/hijab_girl_4.jpg" alt="Jane Doe Taylor" className="rounded-full" />
            <Avatar alt="John Doe Taylor" className="rounded-full" />
            <Avatar alt="Peter Parker" className="rounded-full" />
          </AvatarGroup>
          <br /><br />
          <h3 className="h5">Default (<code>size="md"</code>)</h3>
          <AvatarGroup
            maxLength={5}
          >
            <Avatar src="/img/muhamad_husein.jpg" alt="Muhamad Husein" className="rounded-full" />
            <Avatar src="/img/hijab_girl.jpg" alt="Siti Umaya" className="rounded-full" />
            <Avatar src="/img/hijab_girl_2.webp" alt="Angelina Rose" className="rounded-full" />
            <Avatar src="/img/hijab_girl_3.jpg" alt="Elizabeth Olsen" className="rounded-full" />
            <Avatar src="/img/hijab_girl_4.jpg" alt="Jane Doe Taylor" className="rounded-full" />
            <Avatar alt="John Doe Taylor" className="rounded-full" />
            <Avatar alt="Peter Parker" className="rounded-full" />
          </AvatarGroup>
          <br /><br />
          <h3 className="h5"><code>size="lg"</code></h3>
          <AvatarGroup
            size="lg"
            maxLength={5}
          >
            <Avatar src="/img/muhamad_husein.jpg" alt="Muhamad Husein" className="rounded-full" />
            <Avatar src="/img/hijab_girl.jpg" alt="Siti Umaya" className="rounded-full" />
            <Avatar src="/img/hijab_girl_2.webp" alt="Angelina Rose" className="rounded-full" />
            <Avatar src="/img/hijab_girl_3.jpg" alt="Elizabeth Olsen" className="rounded-full" />
            <Avatar src="/img/hijab_girl_4.jpg" alt="Jane Doe Taylor" className="rounded-full" />
            <Avatar alt="John Doe Taylor" className="rounded-full" />
            <Avatar alt="Peter Parker" className="rounded-full" />
          </AvatarGroup>
          <br /><br />
          <h3 className="h5">Custom <code>{'size={125}'}</code></h3>
          <AvatarGroup
            size={125}
            maxLength={5}
          >
            <Avatar src="/img/muhamad_husein.jpg" alt="Muhamad Husein" className="rounded-full" />
            <Avatar src="/img/hijab_girl.jpg" alt="Siti Umaya" className="rounded-full" />
            <Avatar src="/img/hijab_girl_2.webp" alt="Angelina Rose" className="rounded-full" />
            <Avatar src="/img/hijab_girl_3.jpg" alt="Elizabeth Olsen" className="rounded-full" />
            <Avatar src="/img/hijab_girl_4.jpg" alt="Jane Doe Taylor" className="rounded-full" />
            <Avatar alt="John Doe Taylor" className="rounded-full" />
            <Avatar alt="Peter Parker" className="rounded-full" />
          </AvatarGroup>
        </section>

        <hr />

        <section>
          <h1 className="h4">Group with link</h1>
          <AvatarGroup
            size="lg"
            maxLength={4}
          >
            <a href="https://www.linkedin.com/in/muhamad-husein" target="_blank" rel="noopener noreferrer">
              <Avatar src="/img/muhamad_husein.jpg" alt="Muhamad Husein" className="rounded-full" />
            </a>
            <a href="https://example.com/profile/siti-umaya" target="_blank" rel="noopener noreferrer">
              <Avatar src="/img/hijab_girl.jpg" alt="Siti Umaya" className="rounded-full" />
            </a>
            <a href="https://example.com/profile/angelina-rose" target="_blank" rel="noopener noreferrer">
              <Avatar src="/img/hijab_girl_2.webp" alt="Angelina Rose" className="rounded-full" />
            </a>
            <a href="https://api.dicebear.com/6.x/adventurer/svg?seed=Annie&backgroundColor=b6e3f4" target="_blank" rel="noopener noreferrer">
              <Avatar src="https://api.dicebear.com/6.x/adventurer/svg?seed=Annie&backgroundColor=b6e3f4" alt="Peter Parker" className="rounded-full" />
            </a>
            <a href="https://avatars.dicebear.com/v2/avataaars/john-doe.svg" target="_blank" rel="noopener noreferrer">
              <Avatar alt="John Doe Taylor" className="rounded-full" />
            </a>
          </AvatarGroup>
        </section>

        <hr />

        <section>
          <h1 className="h3"><code>{'<Avatar />'}</code></h1>
          <h1 className="h4">Usage</h1>
          <div className="space-x-4">
            <Avatar src="/img/hijab_girl.jpg" alt="Siti Umaya" />
            <Avatar src="/img/hijab_girl_2.webp" alt="Elizabeth Olsen"className="rounded" />
            <Avatar src="/img/hijab_girl_3.jpg" alt="Jane Doe Taylor" className="rounded-md border-4 border-solid border-white ring-1 ring-gray-400" />
            <Avatar src="/img/hijab_girl_4.jpg" alt="Angelina Rose" className="rounded-full" />
          </div>
        </section>

        <hr />

        <section>
          <h1 className="h4">Option Size</h1>
          <div className="space-x-4">
            {OPTION_SIZE.map((item: any) =>
              <Avatar
                key={item.name}
                src={item.src}
                alt={item.name}
                size={item.size}
                className="rounded"
              />
            )}
          </div>
        </section>

        <hr />

        <section>
          <h1 className="h4">Custom Size</h1>
          <div className="space-x-4">
            <Avatar size={90} src="/img/hijab_girl.jpg" alt="Siti Umaya" />
            <Avatar size={125} src="/img/hijab_girl_2.webp" alt="Elizabeth Olsen" className="rounded" />
            <Avatar size={165} src="/img/hijab_girl_3.jpg" alt="Jane Doe Taylor" className="rounded-md border-4 border-solid border-white ring-1 ring-gray-400" />
            <Avatar size={195} src="/img/hijab_girl_4.jpg" alt="Angelina Rose" className="rounded-full" />
          </div>
        </section>
      </div>
    </>
  )
}

export default App;
