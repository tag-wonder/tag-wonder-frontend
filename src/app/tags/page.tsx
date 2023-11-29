function TagsPage() {
  return (
    <main>
      <div>
        <label htmlFor="name">
          작성자 이름:
          <input id="name" type="text" placeholder="입력하셈" />
        </label>
      </div>
      <div>
        <div>
          {'이미 남겨진 태그중에 선택하거나,\n마음에 드는 태그가 없다면 직접 작성해보세요!'}
        </div>
        <div>(3개까지 추가 가능)</div>
      </div>
      <div>
        <div>#tag</div>
        <div>#tag</div>
        <div>#tag</div>
      </div>
    </main>
  );
}

export default TagsPage;
