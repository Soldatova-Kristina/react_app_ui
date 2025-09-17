import MyButton from "../UI/button/MyButton"
import MyInput from "../UI/input/MyInput"
import MySelect from "../UI/select/MySelect"

const PostFilter = ({filter, setFilter}) => {
return (
     <div>
        <MyInput
          value={search}
          onChange={serched}
          placeholder="Поиск..."
        />

     <MySelect
      value={selected}
      onChange={sortPosts}
      defaultValue="Сортировка"
      options={[
        {value: "title", name: "По названию"},
        {value: "body", name: "По описанию"}
      ]}
      />
     </div>
)
}

export default PostFilter;