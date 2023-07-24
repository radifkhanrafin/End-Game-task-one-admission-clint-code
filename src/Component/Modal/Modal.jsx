import { useState } from "react";
import { FaMinus } from "react-icons/fa";

const Modal = () => {
    const [modal, setModal] = useState(false);
    const [alltext, SetAlltext] = useState(false)
    return (
        <div>
            <div className="text-center">
                <button onClick={() => { setModal(true) }} className="btn w-52 mx-auto mt-80">Open Modal</button>
            </div>
            {
                modal &&


                <div className="absolute top-32 left-1/4 right-1/4 w-2/4 text-center  text-white h-[70vh]  overflow-x-auto bg-black bg-opacity-75 rounded-md ">
                    <button
                        onClick={() => { setModal(false) }}
                        className="absolute top-4 right-6 bg-error p-3 rounded-full">
                        <FaMinus />
                    </button>
                    <div className="mt-16 px-8">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam tempora assumenda magni sequi a excepturi dolores deleniti, rerum, ab incidunt explicabo ea enim. Illo rem repellat molestias ab accusantium quia soluta rerum est commodi iste inventore, nulla numquam et officiis quos, corporis tempora, provident ullam? Quod doloremque commodi ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae ipsum accusamus nostrum quos eum ipsa delectus, hic corporis in deleniti aperiam quam repudiandae quia quaerat. Quibusdam dolorem ex officia. Est, quam! Dolores soluta eos fuga molestiae. Voluptate alias quos ipsa velit iste error quia est optio atque? Sunt minus, consequatur explicabo nesciunt enim autem in aperiam dignissimos quae ex. Voluptate magni quae veniam dicta, illo iste beatae autem quisquam repellendus tenetur ratione sapiente quibusdam corporis porro laudantium ullam. Totam saepe quos obcaecati dicta eum a accusantium sapiente provident magni nisi laborum molestiae, necessitatibus repellendus fuga error quia amet quas reiciendis! Culpa earum cumque soluta, dolores dignissimos eaque ratione? Nam expedita alias quidem et cupiditate doloribus culpa accusamus voluptates temporibus laudantium iusto aut, animi, ipsum explicabo, placeat id perspiciatis minus assumenda? Dignissimos consequuntur voluptate minima atque quo rem saepe maxime, quam ex velit nisi accusamus tempore sed! Necessitatibus sint illo eveniet atque itaque dolores eum quas pariatur, nobis provident ullam corrupti cumque eaque praesentium, quis, voluptatem cupiditate nisi. Quia nesciunt eaque corporis cum. Iusto dicta repellat molestias amet mollitia, cum odit perferendis accusantium aliquam magni facilis, dolore eos velit maxime ipsum dolorum consequuntur praesentium? Ipsa error, eum adipisci excepturi inventore totam magni quis similique atque explicabo provident deserunt tenetur voluptates maxime esse placeat officia quod, corrupti velit vel impedit delectus aliquid distinctio eius. Saepe facilis suscipit quam quibusdam aliquid dolor rem asperiores vitae, veritatis neque reiciendis soluta modi. Dicta adipisci et, voluptatibus rerum voluptatum fuga porro ratione tenetur consequatur corrupti aliquid tempore iure consectetur voluptas dignissimos, accusantium temporibus accusamus ad laboriosam dolor corporis! Quaerat aspernatur deserunt asperiores repudiandae, possimus voluptas dolorem cum libero consequuntur eaque a voluptatum aut, qui maxime sequi amet incidunt accusantium. Doloremque cum perspiciatis quasi. Similique facilis quia quaerat doloribus, distinctio eaque veritatis sint repellendus beatae, labore accusantium dolorum, debitis quibusdam odit harum sit ipsam quod aliquam perferendis. Quo qui illo ab a, tenetur sed placeat velit tempore neque quaerat deleniti libero cumque molestiae, nihil quis itaque repudiandae. Dignissimos nemo dolore modi maiores dolorem nobis, vero tempore totam inventore rerum culpa natus debitis asperiores accusantium praesentium earum odit odio veritatis sed, labore delectus. Tenetur, illo quis nisi ad assumenda iure dolores delectus tempora, odio cum natus aliquam ducimus exercitationem. Itaque nostrum consectetur adipisci nam sapiente repudiandae ea sunt, dolores recusandae sit reiciendis aperiam odit consequatur in nisi praesentium quidem tenetur natus corporis possimus porro molestias nobis illo nesciunt. Dolores quaerat, qui, laboriosam aliquid distinctio mollitia magni accusantium dicta omnis sit sapiente rem facilis excepturi exercitationem aspernatur delectus doloribus libero corporis, officia aperiam. Laboriosam odit at numquam ut? Natus iure maxime esse doloremque cupiditate optio non asperiores expedita velit quo? Dignissimos doloremque accusamus quae odio sapiente reiciendis debitis ipsum sit pariatur ad suscipit corrupti voluptate, vero rem aspernatur ab natus accusantium soluta? Dolores laboriosam dolorem non iusto impedit porro, obcaecati quia accusamus, corrupti, facilis delectus iste reprehenderit. Explicabo illum, voluptatibus, dolore tempore alias nobis aliquam neque rem ad nesciunt libero repellendus assumenda reprehenderit sint temporibus suscipit ipsum atque?
                        </p>
                    </div>

                </div>
            }
        </div>
    );
};

export default Modal;