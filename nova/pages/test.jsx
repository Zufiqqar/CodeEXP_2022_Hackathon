import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());


function test() {

    const { data, error } = useSWR(`https://novabackend.skylivingston.website/difficulties`, fetcher);



    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    // const options = [
    //     { "key":"1", "text": "Home", "link": "/#"},
    //     { "key":"2", "text": "Gallery", "link": "/#"},
    //     { "key":"3", "text": "Content", "link": "/#"},
    //     { "key":"4", "text": "Contact", "link": "/#"},
    //     { "key":"5", "text": "Contactw", "link": "/#"},
    // ];
    const difficultList = data.map((props) => <DifficultOption key={props.id} text= {props.Difficulty_Name} link="\#"></DifficultOption>)



    return <div class="max-w-7xl mx-auto">
            <div class="flex flex-col justify-center h-16">
                <div class="flex items-baseline space-x-1 justify-center">
                   {
                        difficultList
                    }
                    

                </div>
                <InstructionCard> </InstructionCard>

            </div>
        </div>




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
    return <a class="text-gray-300  hover:text-gray-800  px-5 py-2 rounded-md text-sm font-medium" href={props.link}>
    {props.text}
    </a>
}

function InstructionCard(props) {
    return <div class="bg-white w-full mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
        <div class="flex flex-col gap-1">
            <div class="flex flex-1 flex-col gap-3">
                <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl">
                </div>
                <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                    <p>{props.Instructions}</p>
                </div>
                <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                </div>
                <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                </div>
                <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                </div>
            </div>
            <div class="mt-auto flex gap-3">
                <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
                </div>
                <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
                </div>
                <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto">
                </div>
            </div>
        </div>
    </div>


}

export default test;
