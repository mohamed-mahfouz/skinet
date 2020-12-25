using System.Collections.Generic;

namespace API.Helpers
{
    public class Pagination<T> where T : class
    {
        public Pagination(int pageSize, int pageIndex, IReadOnlyList<T> data, int count)
        {
            PageSize = pageSize;
            PageIndex = pageIndex;
            Data = data;
            Count = count;
        }

        public int PageSize { get; }
        public int PageIndex { get; }
        public int Count { get; }
        public IReadOnlyList<T> Data { get; }

    }
}