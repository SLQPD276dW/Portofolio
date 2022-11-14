import { Skill } from "./SkillType";

type Props = {
  skills: Skill[];
};

function Skills(props: Props) {
  return (
    <section className="container m-auto flex max-w-2xl flex-col flex-wrap items-center justify-start md:flex-row">
      {props.skills.map((skill) => {
        return (
          <div className="h-auto w-full p-3 lg:w-1/2">
            <div className="flex h-auto flex-col overflow-hidden rounded border shadow-sm">
              <img
                className="block h-48 w-full flex-none bg-cover md:h-full"
                src={skill.img}
                // width={800}
                // height={600}
              />
              <div className="flex flex-col justify-between rounded-b bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r">
                <div className="mb-2 text-xl font-bold leading-tight text-black">
                  {skill.name}
                </div>
                <p className="text-gray-700 text-base">Read more</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Skills;
