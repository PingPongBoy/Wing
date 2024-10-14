using Wing.Persistence.User;

namespace Wing.UI
{
    public static class UserContext
    {
        /// <summary>
        /// 登录后执行
        /// </summary>
        public static Func<UserDto, UserDto> UserLoginAfter { get; set; }
    }
}
