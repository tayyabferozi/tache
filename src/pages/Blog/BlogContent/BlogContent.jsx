import clsx from "clsx";
import { useState } from "react";

import Button from "../../../components/Button";
import CustomMD from "../../../components/CustomMD";
import Newsletter from "../../../partials/Newsletter";
import useModal from "../../../hooks/useModal";
import ShareTicket from "../../../modals/ShareTicket";

import "./BlogContent.scss";

const mdArticle = `
# Lorem ipsum dolor sit amet \n
faucibus aliquet nulla hac diam eget nunc 
\n\n
Cras malesuada massa non, id donec pulvinar. Sed commodo dui elementum sit. Pretium aliquet cursus sem dictum egestas. Nam donec vitae vel posuere quis amet nibh dignissim suspendisse. Pretium quis odio morbi donec facilisi venenatis. Nisi felis vitae in ut. \n

~~~js
function Description() 
{  return (    
      <div>
         <div>Welcome to Tache</div>
      </div>  
    ) ;
}
export default Description;

~~~

\n\n
# Quote text example

Sollicitudin cras dui amet id non ultrices praesent. Scelerisque convallis diam tristique viverra mauris quis. At eget id velit cursus euismod a. Volutpat viverra vivamus condimentum eu. Duis sagittis lorem ridiculus tempor volutpat. Egestas a viverra elementum eget. Semper elementum scelerisque mauris lectus risus. Et consectetur at sed risus et dolor diam tristique tortor.
\n
Cras malesuada massa non, id donec pulvinar. Sed commodo dui elementum sit. Pretium aliquet cursus sem dictum egestas. Nam donec vitae vel posuere quis amet nibh dignissim suspendisse. Pretium quis odio morbi donec facilisi venenatis. Nisi felis vitae in ut.

> Sollicitudin cras dui amet id non ultrices praesent. Scelerisque convallis diam tristique viverra mauris quis.
>> faucibus aliquet nulla hac diam eget nunc 

# Lorem ipsum dolor sit amet \n
faucibus aliquet nulla hac diam eget nu nc 
\n\n
Lorem ipsum dolor sit amet consectetur. Non vel est habitasse tortor. Eu velit feugiat tincidunt nisi augue lorem sagittis volutpat vitae. Quam felis praesent elit tellus at hac. Nibh massa nulla odio volutpat. Vestibulum vitae gravida lacus ipsum venenatis nibh. Purus diam tincidunt id netus. Lacus justo nunc suspendisse mi iaculis. Commodo eget nunc metus malesuada. Vestibulum arcu egestas enim pharetra consectetur hac fringilla purus. Maecenas tortor in leo senectus volutpat sit arcu. Sed lectus suspendisse amet donec placerat. Id morbi ipsum nullam urna nulla vitae maecenas aliquam nunc. Id adipiscing nunc morbi sapien scelerisque et pharetra. Sed nec volutpat semper sed. Tincidunt pellentesque vestibulum molestie diam semper faucibus nisl feugiat sit. In a id sed risus elit lorem turpis enim sed. Ullamcorper justo imperdiet vestibulum elementum facilisi sit hendrerit. Duis aliquam magna non venenatis mauris nunc sollicitudin viverra. Donec convallis ultrices turpis dui. Nunc dolor et at risus gravida tellus. Ullamcorper et amet egestas ac tincidunt in lectus semper gravida. Sed vitae sit risus fermentum vulputate mauris nisl tortor eu. Ornare quis porttitor euismod neque netus nec. Adipiscing sit orci erat non diam. Eget dignissim vitae amet mi tellus bibendum leo. Neque enim sagittis sit rutrum. Id urna eget amet ipsum elit. Sagittis gravida dolor gravida nec fermentum imperdiet odio. Phasellus amet cras eleifend malesuada.
`;

const mdVid = `
# Public Descriptions \n

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet in fringilla vel rhoncus, posuere ultrices risus. Est, at congue risus
\n
Cras malesuada massa non, id donec pulvinar. Sed commodo dui elementum sit. Pretium aliquet cursus sem dictum egestas. Nam donec vitae vel posuere quis amet nibh dignissim suspendisse. Pretium quis odio morbi donec facilisi venenatis. Nisi felis vitae in ut. \n

\n\n
# Document

Blandit at duis pharetra magna sit metus integer. Nullam malesuada feugiat tortor in. Magna nisi ut mi malesuada feugiat blandit nisi.
\n
Cras malesuada massa non, id donec pulvinar. Sed commodo dui elementum sit. Pretium aliquet cursus sem dictum egestas. Nam donec vitae vel posuere quis amet nibh dignissim suspendisse. Pretium quis odio morbi donec facilisi venenatis. Nisi felis vitae in ut.
      `;

const BlogContent = ({ type }) => {
  const [isClapped, setIsClapped] = useState(false);
  const { show: showShareModal, toggleShow: toggleShareModal } =
    useModal(false);

  return (
    <>
      <ShareTicket
        title="Share Blog"
        show={showShareModal}
        closeModal={() => toggleShareModal("close")}
      />
      <div className="blog-content">
        <div className="blog-header d-flex justify-content-between gap-50 gap-575-20 align-items-sm-center flex-sm-row flex-column">
          <div className="d-flex gap-20 align-items-center">
            <img
              className="blog-user-img"
              src="/assets/imgs/blog-img.png"
              alt="user"
            />
            <div>
              <div className="fw-600 fs-18 text-light-1">Tache Media</div>
              <div className="fs-15 mt-1">04 Mar, 2022</div>
            </div>
          </div>
          <div className="d-flex align-items-cener gap-4">
            <Button
              className="h-34 p-2 gap-10"
              grey
              icon={{
                src: "/assets/vectors/icons/share-3.svg",
                alt: "share",
                title: "share",
              }}
              textClassName="fs-15"
              onClick={toggleShareModal}
            >
              Share
            </Button>
            <div className="d-flex gap-3">
              <img
                className="c-pointer hover-grow"
                src="/assets/vectors/icons/twitter.svg"
                alt="twitter"
              />
              <img
                className="c-pointer hover-grow"
                src="/assets/vectors/icons/linkedin.svg"
                alt="linkedin"
              />
            </div>
          </div>
        </div>

        <div className="mt-40">
          {type === "video" || type === "podcast" ? (
            <img
              className="w-100"
              src="/assets/vectors/blog-video-placeholder.svg"
              alt="video-placeholder"
            />
          ) : (
            <img
              className="w-100"
              src="/assets/imgs/blog-img-placeholder.png"
              alt="img-placeholder"
            />
          )}
        </div>

        <div className="mt-60 md">
          <CustomMD markdown={type === "articles" ? mdArticle : mdVid} />
        </div>

        <div
          className="claps-wrap d-flex align-items-center gap-10 mt-30"
          onClick={() => setIsClapped((prevState) => !prevState)}
        >
          <div className="claps-main">
            <img src="/assets/vectors/icons/clap.svg" alt="clap" />
            <img
              className={clsx("claps-fill", isClapped && "active")}
              src="/assets/imgs/claps.png"
              alt="clap"
            />
          </div>
          <div className={clsx("fw-400 fs-14", isClapped && "text-primary-1")}>
            412
          </div>
        </div>

        <div className="mt-50">
          <Newsletter />
        </div>
      </div>
    </>
  );
};

export default BlogContent;
