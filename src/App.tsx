import { useState } from 'react';
import { Avatar, AvatarProps, AvatarGroup } from './components/avatar';
import { incrementId } from './utils';

const OPTION_SIZE = [
  { size: "xs", name: "Elizabeth Olsen" },
  { size: "sm", name: "John Doe" },
  { size: "md", name: "Peter Parker" },
  { size: "lg", name: "Muhamad Husein", src: "/img/muhamad_husein.jpg" },
];

const GROUPS = [
  { id: 1, name: "Muhamad Husein", src: "/img/muhamad_husein.jpg" },
  { id: 2, name: "Siti Umaya", src: "/img/hijab_girl.jpg" },
  { id: 3, name: "Elizabeth Olsen", src: "/img/hijab_girl_2.webp" },
  { id: 4, name: "Jane Doe Taylor", src: "/img/hijab_girl_3.jpg" },
  { id: 5, name: "Bruce Wayne" },
  { id: 6, name: "Angelina Rose", src: "/img/hijab_girl_4.jpg" },
  { id: 7, name: "Diana Prince" },
  { id: 8, name: "Peter Parker" },
];

const targetBlank = {
  target: "_blank",
  rel: "noopener noreferrer",
};

type avatarGroupsType = Array<{ id: number | string, name: string, src?: string | File }>

export default function App(){
  const [avatarSizeNumber, setAvatarSizeNumber] = useState<boolean>(false);
  const [avatarSize, setAvatarSize] = useState<AvatarProps['size']>('md');
  const [avatarSrc, setAvatarSrc] = useState<any>('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80');
  const [avatarAlt, setAvatarAlt] = useState<string>('Catherine Missal');
  const [avatarRadius, setAvatarRadius] = useState<string>('');
  const [avatarGroupSizeNumber, setAvatarGroupSizeNumber] = useState<boolean>(false);
  const [avatarGroupSize, setAvatarGroupSize] = useState<AvatarProps['size']>('md');
  const [avatarGroupMaxLength, setAvatarGroupMaxLength] = useState<number>(5);
  const [avatarGroups, setAvatarGroups] = useState<avatarGroupsType>(GROUPS);

  const changeAvatarSizeNumber = () => {
    setAvatarSizeNumber(!avatarSizeNumber);
    setAvatarSize(avatarSizeNumber ? 'md' : 56);
  }

  const changeAvatarGroupSizeNumber = () => {
    setAvatarGroupSizeNumber(!avatarGroupSizeNumber);
    setAvatarGroupSize(avatarGroupSizeNumber ? 'md' : 56);
  }

  const addAvatar = () => {
    const id = incrementId();
    setAvatarGroups([
      {
        id,
        name: "",
        src: "",
      },
      ...avatarGroups
    ]);

    setTimeout(() => {
      const inputName = document.getElementById('agName' + id);
      inputName?.focus?.();
    }, 1);
  }

  const removeAvatar = (user: any) => {
    const remove = () => setAvatarGroups(avatarGroups.filter((item) => item.id !== user.id));
    // Immediately remove if name not filled
    if(!user.name){
      remove();
      return;
    }

    if(window.confirm(`Are you sre to remove user ${user.name}?`)){
      remove();
    }
  }

  const changeAvatarGroupItem = (e: any, item: any, key: string) => {
    const target = e.target;
    const file = target?.files?.[0];
    setAvatarGroups(avatarGroups.map((v) => (v.id === item.id ? { ...v, [key]: file || target.value } : v) ));
    // Reset file
    if(key === 'src' && item.src?.type && target.value){
      const inputFile = document.getElementById('agSrcFile' + item.id); // @ts-ignore
      if(inputFile?.value) inputFile.value = '';
    }
  }

  return (
    <>
      <nav className="bg-yellow-50 sticky top-0 z-10 shadow-md">
        <div className="flex items-center py-2 px-4 max-w-screen-xl mx-auto">
          <a href="/" className="no-underline font-bold py-1 text-lg">Avatar</a>
          <a href="https://github.com/M-Husein/q-react-avatar" className="no-underline font-semibold flex mr-6 ml-auto" {...targetBlank}>
            <img alt="github" src="/img/github.svg" height={25} className="block mr-2" />
            Repo
          </a>
          <a href="https://github.com/M-Husein" className="no-underline" {...targetBlank}>
            <img alt="github" src="/img/github.svg" height={25} className="block" />
          </a>
          <a href="https://www.linkedin.com/in/muhamad-husein" className="no-underline ml-4" {...targetBlank}>
            <img alt="github" src="/img/linkedin.svg" height={25} className="block" />
          </a>
        </div>
      </nav>
    
      <div className="p-4">
        <section>
          <h1 className="h3"><code>{'<AvatarGroup />'}</code></h1>
          <h2 className="h4">Usage</h2>
          
          <div className="p-4 mb-6 border border-solid border-gray-300 rounded overflow-auto">
            <h3 className="h5"><code>size="xs"</code></h3>
            <AvatarGroup
              size="xs"
              maxLength={5}
            >
              {GROUPS.map((item: any) => <Avatar key={item.id} src={item.src} alt={item.name} className="rounded-full" />)}
            </AvatarGroup>
          </div>
          
          <div className="p-4 mb-6 border border-solid border-gray-300 rounded overflow-auto">
            <h3 className="h5"><code>size="sm"</code></h3>
            <AvatarGroup
              size="sm"
              maxLength={5}
            >
              {GROUPS.map((item: any) => <Avatar key={item.id} src={item.src} alt={item.name} className="rounded-full" />)}
            </AvatarGroup>
          </div>

          <div className="p-4 mb-6 border border-solid border-gray-300 rounded overflow-auto">
            <h3 className="h5">Default (<code>size="md"</code>)</h3>
            <AvatarGroup
              maxLength={5}
            >
              {GROUPS.map((item: any) => <Avatar key={item.id} src={item.src} alt={item.name} className="rounded-full" />)}
            </AvatarGroup>
          </div>

          <div className="p-4 mb-6 border border-solid border-gray-300 rounded overflow-auto">
            <h3 className="h5"><code>size="lg"</code></h3>
            <AvatarGroup
              size="lg"
              maxLength={5}
            >
              {GROUPS.map((item: any) => <Avatar key={item.id} src={item.src} alt={item.name} className="rounded-full" />)}
            </AvatarGroup>
          </div>

          <div className="p-4 mb-6 border border-solid border-gray-300 rounded overflow-auto">
            <h3 className="h5">Custom <code>{'size={125}'}</code></h3>
            <AvatarGroup
              size={125}
              maxLength={5}
            >
              {GROUPS.map((item: any) => <Avatar key={item.id} src={item.src} alt={item.name} className="rounded-full" />)}
            </AvatarGroup>
          </div>

          <div className="p-4 mb-6 border border-solid border-gray-300 rounded overflow-auto">
            <h3 className="h5"><code>{'maxLength={4}'}</code></h3>
            <AvatarGroup
              maxLength={4}
            >
              {GROUPS.map((item: any) => <Avatar key={item.id} src={item.src} alt={item.name} className="rounded-full" />)}
            </AvatarGroup>
            <details className="mt-4">
              <summary className="py-1 cursor-pointer hover:bg-blue-100">CODE</summary>
              <pre className="mt-0 border border-solid border-gray-300 p-4">{`<AvatarGroup
  maxLength={4}
>
  <Avatar src="/img/muhamad_husein.jpg" alt="Muhamad Husein" className="rounded-full" />
  <Avatar src="/img/hijab_girl.jpg" alt="Siti Umaya" className="rounded-full" />
  <Avatar src="/img/hijab_girl_2.webp" alt="Elizabeth Olsen" className="rounded-full" />
  <Avatar src="/img/hijab_girl_3.jpg" alt="Jane Doe Taylor" className="rounded-full" />
  <Avatar alt="Bruce Wayne" className="rounded-full" />
  <Avatar src="/img/hijab_girl_4.jpg" alt="Angelina Rose" className="rounded-full" />
  <Avatar alt="Diana Prince" className="rounded-full" />
  <Avatar alt="Peter Parker" className="rounded-full" />
</AvatarGroup>`}</pre>
            </details>
          </div>

          <div className="p-4 mb-6 border border-solid border-gray-300 rounded overflow-auto">
            <h3 className="h5">Group with link</h3>
            <AvatarGroup
              size="lg"
              maxLength={4}
            >
              <a href="https://www.linkedin.com/in/muhamad-husein" {...targetBlank}>
                <Avatar src="/img/muhamad_husein.jpg" alt="Muhamad Husein" className="rounded-full" />
              </a>
              <a href="https://example.com/profile/siti-umaya" {...targetBlank}>
                <Avatar src="/img/hijab_girl.jpg" alt="Siti Umaya" className="rounded-full" />
              </a>
              <a href="https://example.com/profile/angelina-rose" {...targetBlank}>
                <Avatar src="/img/hijab_girl_2.webp" alt="Angelina Rose" className="rounded-full" />
              </a>
              <a href="https://api.dicebear.com/6.x/adventurer/svg?seed=Annie&backgroundColor=b6e3f4" {...targetBlank}>
                <Avatar src="https://api.dicebear.com/6.x/adventurer/svg?seed=Annie&backgroundColor=b6e3f4" alt="Peter Parker" className="rounded-full" />
              </a>
              <a href="https://avatars.dicebear.com/v2/avataaars/john-doe.svg" {...targetBlank}>
                <Avatar alt="John Doe Taylor" className="rounded-full" />
              </a>
            </AvatarGroup>
            <details className="mt-4">
              <summary className="py-1 cursor-pointer hover:bg-blue-100">CODE</summary>
              <pre className="mt-0 border border-solid border-gray-300 p-4">{`<AvatarGroup
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
</AvatarGroup>`}</pre>
            </details>
          </div>
        </section>

        <hr />

        <section>
          <h1 className="h3"><code>{'<Avatar />'}</code></h1>
          <h1 className="h4">Usage</h1>
          <div className="p-4 mb-6 border border-solid border-gray-300 rounded overflow-auto">
            <div className="space-x-4">
              <Avatar src="/img/hijab_girl.jpg" alt="Siti Umaya" />
              <Avatar src="/img/hijab_girl_2.webp" alt="Elizabeth Olsen"className="rounded" />
              <Avatar src="/img/hijab_girl_3.jpg" alt="Jane Doe Taylor" className="rounded-md border-4 border-solid border-white ring-1 ring-gray-400" />
              <Avatar src="/img/hijab_girl_4.jpg" alt="Angelina Rose" className="rounded-full" />
            </div>
            <details className="mt-4">
              <summary className="py-1 cursor-pointer hover:bg-blue-100">CODE</summary>
              <pre className="mt-0 border border-solid border-gray-300 p-4">{`<Avatar src="/img/hijab_girl.jpg" alt="Siti Umaya" />
<Avatar src="/img/hijab_girl_2.webp" alt="Elizabeth Olsen"className="rounded" />
<Avatar src="/img/hijab_girl_3.jpg" alt="Jane Doe Taylor" className="rounded-md border-4 border-solid border-white ring-1 ring-gray-400" />
<Avatar src="/img/hijab_girl_4.jpg" alt="Angelina Rose" className="rounded-full" />`}</pre>
            </details>
          </div>

          <div className="p-4 mb-6 border border-solid border-gray-300 rounded overflow-auto">
            <h3 className="h5">Option Size</h3>
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
          </div>

          <div className="p-4 mb-6 border border-solid border-gray-300 rounded overflow-auto">
            <h3 className="h5">Custom Size</h3>
            <div className="space-x-4">
              <Avatar size={90} src="/img/hijab_girl.jpg" alt="Siti Umaya" />
              <Avatar size={125} src="/img/hijab_girl_2.webp" alt="Elizabeth Olsen" className="rounded" />
              <Avatar size={165} src="/img/hijab_girl_3.jpg" alt="Jane Doe Taylor" className="rounded-md border-4 border-solid border-white ring-1 ring-gray-400" />
              <Avatar size={195} src="/img/hijab_girl_4.jpg" alt="Angelina Rose" className="rounded-full" />
            </div>
          </div>

          <div className="mb-4 border border-solid border-gray-300 rounded flex flex-row flex-wrap bg-gray-100 overflow-hidden">
            <div className="w-full lg:w-3/4 grid place-content-center py-6 px-4 text-center overflow-auto h-[calc(100vh-95px)]">
              <h6 className="mb-4">{'<Avatar />'}</h6>
              <Avatar
                size={avatarSize}
                src={avatarSrc}
                alt={avatarAlt}
                className={"flex-none mx-auto " + avatarRadius}
              />

              <hr />

              <h6 className="mb-4">{'<AvatarGroup />'}</h6>
              <AvatarGroup
                size={avatarGroupSize}
                maxLength={avatarGroupMaxLength}
              >
                {avatarGroups.map((item: any) => (
                  <Avatar
                    key={item.id}
                    src={item.src?.type ? window.URL.createObjectURL(item.src) : item.src}
                    alt={item.name}
                    className="rounded-full"
                    onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      item.src?.type && window.URL.revokeObjectURL(e.currentTarget.src)
                    }}
                  />
                ))}
              </AvatarGroup>
            </div>
            <div className="w-full lg:w-1/4 p-4 bg-white overflow-y-auto h-[calc(100vh-95px)]">
              <h6>{'<Avatar />'}</h6>
              <div className="space-y-4">
                <div>
                  <label htmlFor="inputSrcAvatar">src</label>
                  <input
                    type="url" 
                    id="inputSrcAvatar"
                    value={avatarSrc}
                    onChange={(e) => setAvatarSrc(e.target.value)}
                    className="h-10 text-sm rounded border border-solid border-gray-400 p-2 block w-full focus:outline-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="inputSrcAvatarAlt">alt</label>
                  <input
                    type="text"
                    id="inputSrcAvatarAlt"
                    value={avatarAlt}
                    onChange={(e) => setAvatarAlt(e.target.value)}
                    className="h-10 text-sm rounded border border-solid border-gray-400 p-2 block w-full focus:outline-blue-500"
                  />
                </div>

                <div>
                  <div className="flex items-center mb-1">
                    <label htmlFor="inputSizeAvatar">size</label>
                    <label className="inline-flex items-center ml-auto">
                      <input onChange={changeAvatarSizeNumber} type="checkbox" checked={avatarSizeNumber} />
                      Custom
                    </label>
                  </div>

                  {avatarSizeNumber ?
                    <input
                      type="number"
                      min={10}
                      id="inputSizeAvatar"
                      value={avatarSize}
                      onChange={(e) => setAvatarSize(+e.target.value)}
                      className="h-10 text-sm rounded border border-solid border-gray-400 p-2 block w-full focus:outline-blue-500"
                    />
                    :
                    <select
                      id="inputSizeAvatar"
                      value={avatarSize}
                      onChange={(e) => setAvatarSize(e.target.value as AvatarProps['size'])}
                      className="h-10 text-sm rounded border border-solid border-gray-400 p-2 block w-full focus:outline-blue-500 cursor-pointer"
                    >
                      {['xs', 'sm', 'md', 'lg'].map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  }
                </div>

                <div>
                  <label htmlFor="inputAvatarRadius">radius</label>
                  <select
                      id="inputAvatarRadius"
                      value={avatarRadius}
                      onChange={(e) => setAvatarRadius(e.target.value)}
                      className="h-10 text-sm rounded border border-solid border-gray-400 p-2 block w-full focus:outline-blue-500 cursor-pointer"
                    >
                      {['', 'rounded-full', 'rounded', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl'].map((s) => (
                        <option key={s} value={s}>{s === '' ? 'none' : s}</option>
                      ))}
                    </select>
                </div>
              </div>

              <hr />
              
              <h6>{'<AvatarGroup />'}</h6>
              <div className="space-y-4 ">
                <div>
                  <div className="flex items-center mb-1">
                    <label htmlFor="inputSizeAvatarGroup">size</label>
                    <label className="inline-flex items-center ml-auto">
                      <input onChange={changeAvatarGroupSizeNumber} type="checkbox" checked={avatarGroupSizeNumber} />
                      Custom
                    </label>
                  </div>

                  {avatarGroupSizeNumber ?
                    <input
                      type="number"
                      min={10}
                      id="inputSizeAvatarGroup"
                      value={avatarGroupSize}
                      onChange={(e) => setAvatarGroupSize(+e.target.value)}
                      className="h-10 text-sm rounded border border-solid border-gray-400 p-2 block w-full focus:outline-blue-500"
                    />
                    :
                    <select
                      id="inputSizeAvatarGroup"
                      value={avatarGroupSize}
                      onChange={(e) => setAvatarGroupSize(e.target.value as AvatarProps['size'])}
                      className="h-10 text-sm rounded border border-solid border-gray-400 p-2 block w-full focus:outline-blue-500 cursor-pointer"
                    >
                      {['xs', 'sm', 'md', 'lg'].map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  }
                </div>

                <div>
                  <label htmlFor="inputMaxLength">maxLength</label>
                  <input
                      type="number"
                      min={0}
                      id="inputMaxLength"
                      value={avatarGroupMaxLength}
                      onChange={(e) => setAvatarGroupMaxLength(+e.target.value)}
                      className="h-10 text-sm rounded border border-solid border-gray-400 p-2 block w-full focus:outline-blue-500"
                    />
                </div>

                <details>
                  <summary className="py-1 cursor-pointer hover:bg-blue-100">Avatar Items</summary>
                  <div className="rounded border border-solid border-gray-300">
                    <div className="p-2">
                      <button onClick={addAvatar} type="button" className="py-1 px-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 cursor-pointer border-blue-700 text-white rounded select-none">Add User</button>
                    </div>
                    <ol className="m-0 space-y-4 pl-6 pr-3">
                      {avatarGroups.map((item: any) =>
                        <li key={item.id} className="text-sm space-y-4 bg-gray-100 p-3 shadow-md rounded">
                          <div>
                            <label htmlFor={'agName' + item.id}>Name</label>
                            <input
                              type="text"
                              id={'agName' + item.id}
                              className="h-7 text-sm rounded border border-solid border-gray-400 p-2 block w-full focus:outline-blue-500 mt-1"
                              value={item.name}
                              onChange={(e) => changeAvatarGroupItem(e, item, 'name')}
                            />
                          </div>
                          <div>
                            <label htmlFor={'agSrc' + item.id}>Image Src</label>
                            <input
                              type="url"
                              id={'agSrc' + item.id}
                              className="h-7 text-sm rounded border border-solid border-gray-400 p-2 block w-full focus:outline-blue-500 mt-1"
                              value={item.src?.type ? '' : item.src}
                              onChange={(e) => changeAvatarGroupItem(e, item, 'src')}
                            />
                            <h6 className="my-4">or</h6>
                            <label htmlFor={'agSrcFile' + item.id}>Image Src</label>
                            <input
                              type="file"
                              accept="image/*" // "image/png, image/jpeg"
                              id={'agSrcFile' + item.id}
                              className="h-10 text-sm rounded border border-solid border-gray-400 p-2 block w-full mt-1 cursor-pointer"
                              onChange={(e) => changeAvatarGroupItem(e, item, 'src')}
                            />
                          </div>
                          <div className="text-right">
                            <button onClick={() => removeAvatar(item)} type="button" className="py-1 px-2 bg-gray-500 hover:bg-gray-600 active:bg-gray-700 cursor-pointer border-gray-700 text-white rounded select-none">Remove</button>
                          </div>
                        </li>
                      )}
                    </ol>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
