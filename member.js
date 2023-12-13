function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills/view/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}