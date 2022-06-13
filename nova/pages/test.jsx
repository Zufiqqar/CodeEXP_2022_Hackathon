import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function test() {
  const { data, error } = useSWR(
    `https://novabackend.skylivingston.website/difficulties`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // const options = [
  //     { "key":"1", "text": "Home", "link": "/#"},
  //     { "key":"2", "text": "Gallery", "link": "/#"},
  //     { "key":"3", "text": "Content", "link": "/#"},
  //     { "key":"4", "text": "Contact", "link": "/#"},
  //     { "key":"5", "text": "Contactw", "link": "/#"},
  // ];
  const difficultList = data.map((props) => (
    <DifficultOption
      key={props.id}
      text={props.Difficulty_Name}
      link="\#"
    ></DifficultOption>
  ));

  return (
    <div>
      <nav class="bg-white dark:bg-gray-800  ">
        <div class="flex flex-col justify-start max-w-7xl mx-auto   ">
          <div class=" flex items-baseline space-x-4 ">{difficultList}</div>
        </div>
      </nav>
    </div>
  );
}

/* <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
    Home
</a>
<a class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
    Gallery
</a>
<a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
    Content
</a>
<a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
    Contact
</a> */

function DifficultOption(props) {
  return (
    <a
      class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      href={props.link}
    >
      {props.text}
    </a>
  );
}

export default test;
